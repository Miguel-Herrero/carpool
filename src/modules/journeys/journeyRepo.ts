import { Service, Inject } from 'typedi';
import { Journey, JourneyDTO } from './models/journey';
import { JourneyMapper } from './models/journeyMapper';
import { Car } from '../cars/models/car';
import { CAR_REPO_IMPL, CarRepository } from '../cars/carRepo';

export const JOURNEY_REPO_IMPL = 'JOURNEY_REPO_IMPL';

// TODO Move this in-memory database out from the Repository
let _journeys = {};

export interface JourneyRepository {
  saveJourney(journey: JourneyDTO): Promise<Journey>;
  assignCarToJourney(journey: Journey, car: Car): Promise<void>;
}

@Service(JOURNEY_REPO_IMPL)
class JourneyRepositoryImpl implements JourneyRepository {
  @Inject(CAR_REPO_IMPL)
  private carRepo: CarRepository;

  async saveJourney(journey: JourneyDTO): Promise<Journey> {
    // TODO: Call the DB method, instead of having it inside the Repo.
    _journeys = {
      ..._journeys,
      [journey.id]: journey,
    };

    return JourneyMapper.toDomain(journey);
  }

  async assignCarToJourney(journeyToAssign: Journey, carToAssign: Car): Promise<void> {
    // TODO: Call the DB method, instead of having it inside the Repo.
    const journey = _journeys[journeyToAssign.id];
    journey.car = carToAssign.id;

    // Update car with assigned people
    await this.carRepo.assignPeople(carToAssign, journey.people);

    return Promise.resolve();
  }
}
