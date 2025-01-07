import { Container } from "inversify";
import { AssetProviderRepositoryImpl } from "../data/repositories/AssetProviderRepositoryImpl";
import { AssetProviderRepository } from "../domain/repositories/AssetProvideRepository";
import { TYPES } from "./Types";

const container = new Container();

// Bind the implementation to the interface
container.bind<AssetProviderRepository>(TYPES.AssetProviderRepository).to(AssetProviderRepositoryImpl);

export default container;