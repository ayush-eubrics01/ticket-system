import { FeedbackReviewStatus } from '../enum/feedbackReviewStatus.enum';

export class ChangeFeedbackStatusDto {
  id: string;
  status?: FeedbackReviewStatus;
}
