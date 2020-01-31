import { Car } from './carEntity';
import { CarDTO } from './carDTO';

export class CarMap {
  // public static toDomain (raw: any): Vinyl {
  //   const vinylOrError = Vinyl.create({
  //     albumName: AlbumName.create(raw.album_name).getValue(),
  //     artistName: ArtistName.create(raw.artist_name).getValue(),
  //     tracks: raw.TrackList.map((t) => TrackMap.toDomain(t))
  //   }, new UniqueEntityID(raw.vinyl_id));
  //   return vinylOrError.isSuccess ? vinylOrError.getValue() : null;
  // }

  // public static toPersistence (vinyl: Vinyl): any {
  //   return {
  //     album_name: vinyl.albumName.value,
  //     artist_name: vinyl.artistName.value
  //   }
  // }

  public static toDTO(car: Car): CarDTO {
    return {
      licensePlate: car.id,
      seats: car.seats,
    };
  }
}
