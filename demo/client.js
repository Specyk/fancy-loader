import fancyLoader from '../index'
import express from 'express'


async function main() {
    const app = express()
    app.use('/', await fancyLoader('api', __dirname + '/routes'))
    app.listen(3000)
}

main().then(() => {
    console.log('Application is running...');
}).catch((err) => {
    console.log(`App error: ${err}`);
})

// Alternatively with Promise
// fancyLoader("api", __dirname + "/routes").then(middleware => {
//     app.use("/", middleware)
//     app.listen(3000, () => console.log(`Started`))
// })

