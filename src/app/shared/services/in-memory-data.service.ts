import {InMemoryDbService} from "angular-in-memory-web-api";
import {City} from "../models/city.model";

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let cities = [
            new City(1, "Toronto"),
            new City(2, "Wałbrzych"),
            new City(3, "Toruń"),
            new City(4, "Inowrocław"),
            new City(5, "Pekin"),
            new City(6, "Paryż")
        ];

        return {cities};
    }
}
