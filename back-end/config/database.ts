export default ({ env }) => {
  return {
    connection: { 
      client: 'mysql', 
      connection: {
        host: env('DATABASE_HOST', 'localhost'), 
        port: env.int('DATABASE_PORT', 3306),    
        database: env('DATABASE_NAME', 'strapi'), 
        user: env('DATABASE_USERNAME', 'strapi'), 
        password: env('DATABASE_PASSWORD', 'strapi'), 
      },
      pool: { 
        min: env.int('DATABASE_POOL_MIN', 2), 
        max: env.int('DATABASE_POOL_MAX', 10) 
      },
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};
