export = {
  development: {
    client: "postgresql",
    connection: {
      host: "localhost",
      port: "5432",
      database: "perntodo",
      user: "postgres",
      password: "postgres",
    },
    pool: {
        min: 2,
        max: 10,
    },
    migrations: {
        directory: __dirname + '/migrations',
        tablename: 'knex_migrations',
        extension: 'ts',
    }
  },
} as { [key: string]: object };

// Line 21 is telling typescript the types for this module. It's saying that key is a string and inside the key is an object.