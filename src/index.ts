import { AppDataSource } from "./data-source";
import { Photo } from "./entity/Photo";
import { PhotoMetadata } from "./entity/PhotoMetadata";

AppDataSource.initialize()
  .then(async () => {
    const photoRepository = AppDataSource.getRepository(Photo);
    const photos = await photoRepository.find({
      relations: {
        metadata: true,
      },
    });
    console.log(photos);
  })
  .catch((error) => console.log(error));
