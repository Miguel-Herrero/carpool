import { JsonController, Post, Body } from 'routing-controllers';
import { Inject } from 'typedi';
import { UseCase } from '../../modules/core/useCaseInterface';
import { CREATE_JOURNEY_USE_CASE } from '../../modules/journeys/useCases/createJourneyUseCase';
import { JourneyDTO } from '../../modules/journeys/models/journey';

@JsonController()
export class JourneyController {
  @Inject(CREATE_JOURNEY_USE_CASE)
  private useCase: UseCase<JourneyDTO>;

  @Post('/journeys')
  async post(@Body({ required: true, type: 'JourneyDTO' }) journey: JourneyDTO): Promise<JourneyDTO> {
    await this.useCase.exec(journey);
    return journey;
  }
}
