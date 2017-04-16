import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

import "rxjs/add/operator/toPromise";


@Injectable()
export class CitiesService
{
    private citiesUrl = 'api/cities';  // URL to web api

    cities: Array<string>;

    constructor(private http: Http)
    {
        this.cities = ["Warsaw", "Berlin", "Paris", "Moscow", "London", "Tokio"];

        console.info(this.cities);
    }


    getList(): Promise<string[]>
    {
        return this.http.get(this.citiesUrl)
        .toPromise()
        .then(response => response.json().data as string[])
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any>
    {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    addCity(cityName: string)
    {
        this.cities.push(cityName);

        console.debug(`Added city ${cityName} `)
    }
}
