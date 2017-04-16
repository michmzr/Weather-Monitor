import {InMemoryDbService} from "angular-in-memory-web-api";


export class InMemoryDataService implements InMemoryDbService
{
    createDb()
    {
        let cities = ["Toronto", "Wałbrzych", "Toruń", "Inowrocław", "Pekin", "Paryż"];

        return cities;
    }

}
