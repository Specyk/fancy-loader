const express = require('express')
const { createRoutesMap } = require('./routesMap')

async function loadRoutes(router, root, routesMap) {
    routesMap.forEach(async (routePath, routeName) => {
        try {
            let mod = await import(routePath)
            // console.dir(mod);
            // console.log(`${routeName} : ${typeof mod.default}`)
            const urlRoute = `/${root}/${routeName}`;
            // console.log(urlRoute)
            router.use(urlRoute, mod.default)
        } catch (err) {
            throw err
        }
    })
}

module.exports = async (root, directory) => {
    let mainRouter = express.Router()

    let routesMap, siteRouter
    try {
        routesMap = await createRoutesMap(directory)
        await loadRoutes(mainRouter, root, routesMap)
    } catch (err) {
        throw err
    }
    return mainRouter
}
