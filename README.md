# React Real Time

## Pre-requisites
- MongoDB: Please Do the following commands

`$ wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -`
 
`$ echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list`
 
`$ sudo apt-get update`

`$ sudo apt-get install -y mongodb-org`

Start the mongoDB: `$ sudo systemctl start mongod`

Make Sure the mongo is up and running `$ sudo systemctl status mongod`. The output should look as follow

```
● mongod.service - MongoDB Database Server
     Loaded: loaded (/lib/systemd/system/mongod.service; disabled; vendor preset: enabled)
     Active: active (running) since Sun 2021-04-11 22:03:56 +07; 4h 16min ago
       Docs: https://docs.mongodb.org/manual
   Main PID: 14297 (mongod)
     Memory: 66.3M
     CGroup: /system.slice/mongod.service
             └─14297 /usr/bin/mongod --config /etc/mongod.conf

```
 
## Client

Please run the command `$ Yarn && Yarn start` to start the client with the url `localhost:3000`

- The Chat room URL is as follow: `http://localhost:3000/chat?name=${Your Name}&room=${Your Room Name}`


## Server

Please run the command `$ npm i && npm start` to start the server. The server url is `localhost:5000` which also serves as the local endpoint for the api


