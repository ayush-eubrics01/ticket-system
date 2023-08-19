import { Injectable } from '@nestjs/common';
import { NewFeedbackDto } from './dto/newFeedback.dto';
import { Feedback } from './feedback.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FeedbackReviewStatus } from './enum/feedbackReviewStatus.enum';
import { ChangeFeedbackStatusDto } from './dto/changeFeedbackStatus.dto';

@Injectable()
export class FeedbackService {
  constructor(
    @InjectRepository(Feedback)
    private feedbackDatabaseService: Repository<Feedback>,
  ) {}

  async issueNewFeedback(newFeedbackDto: NewFeedbackDto): Promise<Feedback> {
    const { email, subject, description, topic } = newFeedbackDto;
    const feedback = this.feedbackDatabaseService.create({
      email,
      subject,
      description,
      topic,
      createdAt: new Date(),
      status: FeedbackReviewStatus.OPEN,
    });
    await this.feedbackDatabaseService.save(feedback);
    return feedback;
  }

  async retrieveAllFeedBacks(): Promise<Feedback[]> {
    const feedbacks = await this.feedbackDatabaseService.find();
    return feedbacks;
  }

  async changeFeedbackStatus(
    changeFeedbackStatusDto: ChangeFeedbackStatusDto,
  ): Promise<Feedback> {
    const { id, status } = changeFeedbackStatusDto;
    const feedback = await this.feedbackDatabaseService.save({
      id: id,
      status,
    });
    return feedback;
  }
}
