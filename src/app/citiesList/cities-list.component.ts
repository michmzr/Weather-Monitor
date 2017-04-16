/**
 * Created by Michał on 2017-04-02.
 */

import {Component, OnInit} from "@angular/core";
import {CitiesService} from "../shared/services/cities-service.service";

@Component({
    selector: "cities-list",
    templateUrl: "cities-list.component.html",
    providers: [CitiesService]
})
export class CitiesListComponent implements OnInit
{
    cities: Array<string>;

    constructor(private citiesService: CitiesService)
    {
    }

    ngOnInit()
    {
        this.cities = ["Elbląg"];

        let cmp = this;
        this.citiesService.getList().then(cities => this.cities = cities);
        this.citiesService.getList().then(cities =>
        {
            cmp.cities = cities;
            console.debug(cities)
        });
    }
}