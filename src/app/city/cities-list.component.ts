/**
 * Created by Michał on 2017-04-02.
 */
import {Component, OnInit} from "@angular/core";
import {CitiesService} from "../shared/services/cities-service.service";
import {City} from "../shared/models/city.model";
import {EventsService} from "../shared/services/events-service.service";

@Component({
    selector: "cities-list",
    templateUrl: "cities-list.component.html",
    providers: [CitiesService, EventsService]
})
export class CitiesListComponent implements OnInit
{
    cities: Array<City>;

    constructor(private citiesService: CitiesService,
                private eventsService: EventsService)
    {
    }

    ngOnInit()
    {
        this.cities = [];

        this.loadCities();

        this.eventsService.on('city-added', (city: City) =>
        {
            this.cities.push(city);
        });
    }

    loadCities()
    {
        this.citiesService.getList().then(
            cities => this.cities = cities
        );
    }
}