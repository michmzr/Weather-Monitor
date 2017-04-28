/**
 * Created by Michał on 2017-04-02.
 */
import {Component, OnInit} from "@angular/core";
import {CitiesService} from "../shared/services/cities-service.service";
import {City} from "../shared/models/city.model";

@Component({
    selector: "cities-list",
    templateUrl: "cities-list.component.html",
    providers: [CitiesService]
})
export class CitiesListComponent implements OnInit
{
    cities: Array<City>;

    constructor(private citiesService: CitiesService)
    {
    }

    ngOnInit()
    {
        this.cities = [];

        //todo observer
        this.citiesService.getList().then(cities => this.cities = cities);
    }
}