/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column ,  } from 'typeorm';
import { Topic } from './enum/topic.enum';
import { FeedbackReviewStatus } from './enum/feedbackReviewStatus.enum';

@Entity()
export class Feedback {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({nullable: false})
  email: string;

  @Column({nullable: false})
  subject: string;

  @Column({nullable: false})
  topic: Topic;

  @Column({nullable: false})
  description: string;

  @Column()
  createdAt: Date;

  @Column()
  status: FeedbackReviewStatus;
}
