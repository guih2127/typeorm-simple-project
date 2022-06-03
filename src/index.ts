import { AppDataSource } from "./data-source";
import { Photo } from "./entity/Photo";

AppDataSource.initialize()
  .then(async () => {
    const photoRepository = AppDataSource.getRepository(Photo);
    const allPhotos = await photoRepository.find();
    console.log("All photos from the db: ", allPhotos);

    const firstPhoto = await photoRepository.findOneBy({
      id: 1,
    });
    console.log("First photo from the db: ", firstPhoto);

    const meAndBearsPhoto = await photoRepository.findOneBy({
      name: "Me and Bears",
    });
    console.log("Me and Bears photo from the db: ", meAndBearsPhoto);

    const allViewedPhotos = await photoRepository.findBy({ views: 1 });
    console.log("All viewed photos: ", allViewedPhotos);

    const allPublishedPhotos = await photoRepository.findBy({
      isPublished: true,
    });
    console.log("All published photos: ", allPublishedPhotos);

    const [photos, photosCount] = await photoRepository.findAndCount();
    console.log("All photos: ", photos);
    console.log("Photos count: ", photosCount);
  })
  .catch((error) => console.log(error));
