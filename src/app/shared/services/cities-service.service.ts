import {Injectable} from "@angular/core";
import {Http, RequestOptions, Headers} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {City} from "../models/city.model";
import {EventsService} from "./events-service.service";

@Injectable()
export class CitiesService
{
    private citiesUrl = 'db/cities';  // URL to web api

    private headers: Headers = new Headers({'Content-Type': 'application/json'});

    private lastId: number = 0;

    constructor(private http: Http,
                private eventsService: EventsService,)
    {
    }

    getList(): Promise<City[]>
    {
        return this.http.get(this.citiesUrl)
            .toPromise()
            .then(
                (response) => {
                    let cities = response.json().data as City[];

                    this.lastId = cities.length;

                    return cities;
                }
            )
            .catch(this.handleError);
    }

    getCity(id: number): Promise<City>
    {
        const url = `${this.citiesUrl}/${id}`;

        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as City)
            .catch(this.handleError);
    }

    create(name: string): Promise<City>
    {
        let options = new RequestOptions({headers: this.headers});

        return this.http
            .post(`${this.citiesUrl}`, JSON.stringify({name: name}), options)
            .toPromise()
            .then(
                (res) =>
                {
                    let city = res.json().data as City;

                    this.eventsService.broadcast('city-added', city);

                    return city

                }
            ).catch(this.handleError);
    }

    update(city: City): Promise<City>
    {
        const url = `${this.citiesUrl}/${city.id}`;

        return this.http
            .put(url, JSON.stringify(city), {headers: this.headers})
            .toPromise()
            .then(response => city)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);

        return Promise.reject(error.message || error);
    }
}
