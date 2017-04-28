import {Component, OnInit} from "@angular/core";
import {CitiesService} from "../shared/services/cities-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {City} from "../shared/models/city.model";

@Component({
    selector: "city-add",
    templateUrl: "city-add.component.html",
    providers: [CitiesService]
})
export class CityAddComponent implements OnInit
{
    constructor(private citiesService: CitiesService,
                private route: ActivatedRoute,
                private router: Router,
                private location: Location) {
    }

    ngOnInit(): void
    {
    }

    cityName: string;
    submitted = false;

    onSubmit()
    {
        let cityName = this.cityName;

        this.submitted = true;
        this.cityName = "";

        this.citiesService.create(cityName).then(
            (city: City) => this.router.navigate(['/cities/details', city.id])
        );
    }
}