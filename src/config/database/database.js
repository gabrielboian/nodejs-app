module.exports = {
    dialect: 'mysql or postgress or any other supported',
    host: 'your host',
    username: 'your user',
    password: 'your password',
    database: 'your db name',
    define: {
        // created at and updated at automatically assign
        timestamps: true,
        // all db underscored, like created_at
        underscored: true,
    }
}