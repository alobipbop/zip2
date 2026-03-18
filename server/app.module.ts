import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './entities/user.entity';
import { Goal } from './entities/goal.entity';
import { Task } from './entities/task.entity';
import { TaskType } from './entities/task-type.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/kairoly',
      entities: [User, Goal, Task, TaskType],
      synchronize: true, // Auto-create tables (dev only)
    }),
    TypeOrmModule.forFeature([User, Goal, Task, TaskType]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
