# fancy-loader

This is a middleware for asynchronously, quick and simply load routes to your Express.js application.

# Installation
    npm install fancy-loader --save

# Example for this project structure
    Express-Application
        routes/
            home.js  - each file must export express module (Express.Router, Express.Application)
            about.js   - it loead each file, e.g. on route /about, load about.js module 
        index.js

    # Index.js

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
    fancyLoader("api", __dirname + "/routes").then(middleware => {
        app.use("/", middleware)
        app.listen(3000, () => console.log(`Started`))
    })
