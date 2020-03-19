const path = require('path');
const globby = require('globby');

module.exports = {
    createRoutesMap: async (rootPath) => {
        // console.log(rootPath);
        try {
            const routesMap = new Map()  // routeName : module
            const paths = await globby(rootPath, {})
            paths.forEach(modulePath => {
                const routeName = path.basename(modulePath, '.js')
                routesMap.set(routeName, modulePath)
            })
            // console.log(routesMap);
            return routesMap
        } catch (err) {
            throw err
        }
    }
}
