module.exports = {
  client: 'mysql',
  connection: {
    host: "127.0.0.1",
    port: "3306",
    user: "admin",
    password: "admin",
    database: "products"
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: "./migrations"
  }
};

