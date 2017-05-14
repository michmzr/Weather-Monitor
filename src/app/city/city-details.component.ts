import "rxjs/add/operator/switchMap";
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {Location} from "@angular/common";
import {CitiesService} from "../shared/services/cities-service.service";
import {City} from "../shared/models/city.model";

@Component({
    selector: "city-details",
    templateUrl: "city-details.component.html",
    providers: [CitiesService]
})
export class CityDetailsComponent implements OnInit
{
    constructor(private citiesService: CitiesService,
                private route: ActivatedRoute,
                private location: Location)
    {
    }

    city: City;
    weather: Object;

    ngOnInit(): void
    {
        this.route.params
            .switchMap((params: Params) => this.citiesService.getCity(+params['id']))
            .subscribe((city) =>
            {
                this.city = city;
            });
    }

    save(): void
    {
        this.citiesService.update(this.city)
            .then(() => this.goBack());
    }

    goBack(): void
    {
        this.location.back();
    }
}