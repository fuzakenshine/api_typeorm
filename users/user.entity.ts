import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ unique: true })
    email!: string;

    @Column()
    password!: string;

    @Column()
    title!: string;

    @Column()
    firstName!: string;

    @Column()
    lastName!: string;

    @Column({ nullable: true }) // Check if role is still present
    role?: string;
}