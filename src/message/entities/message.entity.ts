/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, CreateDateColumn } from 'typeorm';
import { ChatRoom } from 'src/chat-room/entities/chat-room.entity';
import { User } from 'src/users/entities/user.entity';

@Entity('messages')
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ChatRoom, (chatRoom) => chatRoom.id, { onDelete: 'CASCADE' })
  chat_room: ChatRoom;

  @ManyToOne(() => User, (user) => user.id, { onDelete: 'SET NULL' })
  sender: User;

  @Column()
  content: string;

  @CreateDateColumn()
  created_at: Date;
}