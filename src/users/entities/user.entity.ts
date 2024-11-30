/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";

@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    full_name: string;

    @Column({ unique: true })
    nickname: string;

    @Column()
    password_hash: string;

    @CreateDateColumn()
    created_at: Date;
}
