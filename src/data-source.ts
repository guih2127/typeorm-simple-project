import "reflect-metadata";
import { DataSource } from "typeorm";
import { Album } from "./entity/Album";
import { Author } from "./entity/Author";
import { Photo } from "./entity/Photo";
import { PhotoMetadata } from "./entity/PhotoMetadata";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "password",
  database: "postgres",
  synchronize: true,
  logging: false,
  entities: [User, Photo, PhotoMetadata, Album, Author],
  migrations: [],
  subscribers: [],
});
