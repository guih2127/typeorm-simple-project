import { AppDataSource } from "./data-source";
import { Album } from "./entity/Album";
import { Photo } from "./entity/Photo";

AppDataSource.initialize()
  .then(async () => {
    const album1 = new Album();
    album1.name = "Bears";
    await AppDataSource.manager.save(album1);

    const album2 = new Album();
    album2.name = "Me";
    await AppDataSource.manager.save(album2);

    // create a few photos
    const photo = new Photo();
    photo.name = "Me and Bears";
    photo.description = "I am near polar bears";
    photo.filename = "photo-with-bears.jpg";
    photo.views = 1;
    photo.isPublished = true;
    photo.albums = [album1, album2];
    await AppDataSource.manager.save(photo);

    // now our photo is saved and albums are attached to it
    // now lets load them:
    const loadedPhoto = await AppDataSource.getRepository(Photo).findOne({
      where: {
        id: 1,
      },
      relations: {
        albums: true,
      },
    });
  })
  .catch((error) => console.log(error));
