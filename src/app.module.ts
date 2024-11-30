/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';


import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersModule } from './users/users.module';
import { ChatRoomModule } from './chat-room/chat-room.module';
import { ChatParticipantModule } from './chat-participant/chat-participant.module';


import { User } from './users/entities/user.entity';
import { ChatRoom } from './chat-room/entities/chat-room.entity';
import { ChatParticipant } from './chat-participant/entities/chat-participant.entity';
import { MessageModule } from './message/message.module';
import { Message } from './message/entities/message.entity';
import { NotificationModule } from './notification/notification.module';
import { Notification } from './notification/entities/notification.entity';

@Module({
  imports: [

    ConfigModule.forRoot({}),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.PGHOST,
      port: parseInt(process.env.PGPORT),
      username: process.env.PGUSER,
      password: process.env.PGPASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, ChatRoom, ChatParticipant, Message, Notification]),
    
    // Modulos
    UsersModule,
    ChatRoomModule,
    ChatParticipantModule,
    MessageModule,
    NotificationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
