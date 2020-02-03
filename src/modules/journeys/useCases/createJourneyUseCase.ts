import { Service, Inject } from 'typedi';
import { UseCase } from '../../core/useCaseInterface';
import { JOURNEY_REPO_IMPL, JourneyRepository } from '../journeyRepo';
import { JourneyDTO } from '../models/journey';
import { CAR_REPO_IMPL, CarRepository } from '../../cars/carRepo';

export const CREATE_JOURNEY_USE_CASE = 'CREATE_JOURNEY_USE_CASE';

@Service(CREATE_JOURNEY_USE_CASE)
class CreateJourneyUseCase implements UseCase<JourneyDTO> {
  @Inject(JOURNEY_REPO_IMPL)
  private journeyRepo: JourneyRepository;

  @Inject(CAR_REPO_IMPL)
  private carRepo: CarRepository;

  async exec(journey: JourneyDTO): Promise<void> {
    // Save journey into DB
    const savedJourney = await this.journeyRepo.saveJourney(journey);

    // Get from Repo the most suitable car for this people
    const suitableCar = await this.carRepo.getSuitableCarForPeople(journey.people);

    if (suitableCar) {
      // Assign this car to journey
      await this.journeyRepo.assignCarToJourney(savedJourney, suitableCar);
    }

    return Promise.resolve();
  }
}
