/* eslint-disable prettier/prettier */
import { Topic } from '../enum/topic.enum';

export class NewFeedbackDto {
  email: string;
  subject: string;
  topic: Topic;
  description: string;
}
