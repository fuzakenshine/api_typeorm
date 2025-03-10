import { DataSource } from 'typeorm';
import { User } from './users/user.entity';

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'john09125990132@ray',
    database: 'node-mysql-crud-api',
    entities: [User],
    synchronize: true, // Set this to true if you want TypeORM to automatically synchronize the schema
});

AppDataSource.initialize()
    .then(async () => {
        console.log('Data Source has been initialized!');
        // Synchronize the database schema
        await AppDataSource.synchronize();
    })
    .catch((err) => {
        console.error('Error during Data Source initialization:', err);
    });