export const database = {
    dbConnection: process.env.dbConnection || 'mongodb://localhost/',
    dbName: process.env.dbName || 'social-generator',
    urlCollection: process.env.urlCollection || 'urls',
};