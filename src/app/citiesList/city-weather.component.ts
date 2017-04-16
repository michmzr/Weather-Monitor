import {Component, Input, OnInit} from "@angular/core";
import construct = Reflect.construct;

@Component({
    selector: "city-weather",
    templateUrl: "city-weather.component.html",
})
export class CityWeatherComponent implements OnInit
{
    constructor()
    {
    }

    @Input() name: string;

    temp: number = 6;
    date: Date;

    ngOnInit()
    {
        this.temp = 6;
        this.date = new Date;
    }
}