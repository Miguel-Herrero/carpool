import { Journey, JourneyDTO } from './journey';

export class JourneyMapper {
  public static toDomain(journey: JourneyDTO): Journey {
    return {
      uuid: 'uuid',
      id: journey.id,
      people: journey.people,
      car: undefined,
    };
  }

  public static toDTO(journey: Journey): JourneyDTO {
    return {
      id: journey.id,
      people: journey.people,
    };
  }
}
