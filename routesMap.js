import path from 'path';
import globby from 'globby';


export async function createRoutesMap(rootPath) {
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