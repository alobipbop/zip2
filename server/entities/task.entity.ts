import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Goal } from './goal.entity';
import { TaskType } from './task-type.entity';

@Entity('tasks')
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'int', default: 1 })
  weight: number;

  @Column({ default: false })
  isCompleted: boolean;

  @Column({ type: 'timestamp', nullable: true })
  completedAt: Date;

  @ManyToOne(() => Goal, (goal) => goal.tasks, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'goalId' })
  goal: Goal;

  @Column()
  goalId: string;

  @ManyToOne(() => TaskType, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'typeId' })
  type: TaskType;

  @Column({ nullable: true })
  typeId: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
