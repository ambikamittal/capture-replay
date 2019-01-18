# Capture Replay

## To run locally

```
npm install
npm start
```

Then open [`http://localhost:3030/`](http://localhost:3030/). This will open the UI application.

## To setup node server and mongo db

Create a new folder say "backend". Copy screenshots.model.js, server.js. Place package-mongo.json and rename it to package.json. 
```
npm install  (installs node server dependencies)
npm install -g nodemon

mongod (starts mongo driver. Ensure mongoDB is installed on your system)
mongo (once the mongo client is started. It will prompt for database)
use screenshots (this will switch to screenshots DB that we have created)

nodemon server  (to start node server)
```
## Test webservices using postman

Having completed the server implementation we’re now ready to run tests for our HTTP endpoints by using the Postman tool (https://www.getpostman.com/).
Hit http://localhost:4000/screenshots in postman, it will return empty array

## To capture the screenshots

UI application is running at port 3030, enter values and click next buttons. This will save the values in DB.
To verify that screenshots are saved in DB. Hit screenshots service in postman. It wil show the entries made in the DB.

## To replay the screensots

Open replay.html in a browser. Enter a session id and clik "Play button". The stored screenshots will be replayed on the UI.

