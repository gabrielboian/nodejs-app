# nodejs-app
Simple NodeJS app

## Getting Started
This App it's a little help for you manage login in NodeJS. We are using passport authenticate to facebook and google auth and create are on
models for local users. We also aproach MongoDB or SQL DB's, and the architeture MVC.
Help you using Express, express-session, bodyparser, routes and some others initial things.

### Prerequisites
Assuming you have already installed NPM and have a simple knowledge with JS and NodeJS it's just follow the steps below

### Installing
On your directory:
```
git clone https://github.com/gabrielboian/nodejs-app.git
```

after cloning the repo:

Entry on folder and type:
```
npm install
```

### Running
After all steps above you have to choose between MYSQL or MongoDB, after that you have to run:

if mongodb:
```
npm install mongoose
```

if mysql:
```
npm install sequelize
```
```
npm install sequelize-cli
```

Open the project on your prefered editor and ready app.js to understand how connect your database's choice
And then open our models and delete or comment the code who don't matches with your choice

When you are done just run:
```
npm start
```


## Author

* **Gabriel Boian** - [GabrielBoian](https://github.com/gabrielboian)

## License

This project is licensed under the MIT License