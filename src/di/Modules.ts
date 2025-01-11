import { Container } from "inversify";
import { AssetProviderRepositoryImpl } from "../data/repositories/AssetProviderRepositoryImpl";
import { AssetProviderRepository } from "../domain/repositories/AssetProvideRepository";
import { TYPES } from "./Types";
import { ConfigsProviderRepository } from "../domain/repositories/ConfigsProviderRepository";
import { ConfigsProviderRepositoryImpl } from "../data/repositories/ConfigsProviderRepositoryImpl";

const container = new Container();

container.bind<AssetProviderRepository>(TYPES.AssetProviderRepository).to(AssetProviderRepositoryImpl);
container.bind<ConfigsProviderRepository>(TYPES.ConfigsProviderRepository).to(ConfigsProviderRepositoryImpl);

export default container;