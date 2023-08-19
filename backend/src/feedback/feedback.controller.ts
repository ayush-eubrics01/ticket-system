import { Controller, Post, Body, Get } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { NewFeedbackDto } from './dto/newFeedback.dto';
import { Feedback } from './feedback.entity';
import { ChangeFeedbackStatusDto } from './dto/changeFeedbackStatus.dto';

@Controller('feedback')
export class FeedbackController {
  constructor(private feedbackService: FeedbackService) {}

  @Post()
  newFeedback(@Body() newFeedbackDto: NewFeedbackDto) {
    return this.feedbackService.issueNewFeedback(newFeedbackDto);
  }

  @Get()
  getAllFeedBacks(): Promise<Feedback[]> {
    return this.feedbackService.retrieveAllFeedBacks();
  }

  @Post('/status')
  changeFeedbackStatus(
    @Body() changeFeedbackStatusDto: ChangeFeedbackStatusDto,
  ) {
    return this.feedbackService.changeFeedbackStatus(changeFeedbackStatusDto);
  }
}
