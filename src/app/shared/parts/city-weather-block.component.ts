import {Component, Input, OnInit} from "@angular/core";
import {City} from "../models/city.model";
import construct = Reflect.construct;

@Component({
    selector: "city-weather-block",
    templateUrl: "city-weather-block.component.html",
})
export class CityWeatherBlockComponent implements OnInit
{
    constructor()
    {
    }

    @Input() city: City;

    temp: number = 6;
    date: Date;

    ngOnInit()
    {
        this.temp = 6;
        this.date = new Date;
    }
}