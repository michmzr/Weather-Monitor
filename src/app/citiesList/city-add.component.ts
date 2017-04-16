import {Component, OnInit} from "@angular/core";
import {CitiesService} from "../shared/services/cities-service.service";


@Component({
    selector: "city-add",
    templateUrl: "city-add.component.html",
    providers: [CitiesService]
})
export class CityAddComponent implements OnInit
{
    constructor(private citiesService: CitiesService)
    {
    }

    ngOnInit(): void
    {
    }

    cityName: string;
    submitted = false;

    onSubmit()
    {
        console.debug(`submit -> cityName:${this.cityName}`);

        this.submitted = true;
        this.citiesService.addCity(this.cityName);
        this.cityName = "";
    }
}