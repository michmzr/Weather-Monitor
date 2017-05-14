import {Component, Input, OnInit} from "@angular/core";
import {City} from "../models/city.model";
import {OpenWeatherService} from "../services/weather-service.service";
import construct = Reflect.construct;

@Component({
    selector: "city-weather-block",
    templateUrl: "city-weather-block.component.html",
    providers: [OpenWeatherService],
})
export class CityWeatherBlockComponent implements OnInit
{
    constructor(private openWeatherService: OpenWeatherService,)
    {
    }

    @Input() city: City;

    private weather: Object;
    private bcgColor: string;
    private error: string;

    date: Date;

    ngOnInit()
    {
        this.date = new Date;
        this.weather = null;
        this.bcgColor = this.getPanelBcgColor();

        this.getCurrentWeather();
    }

    getCurrentWeather()
    {
        this.openWeatherService.getCityWeather(this.city).subscribe(
            weather =>
            {
                console.debug(weather);

                this.weather = weather;
            },
            err =>
            {
                this.error = "Not expected error";
                // Log errors if any
                console.log(err);
            });
    }

    getPanelBcgColor()
    {
        let colors: Array<string> = ["#8175c7", "#337ab7", "#ff6c60", "#353432", "2b542c", "#333333", "#660000", "#660099"];

        let bcg = colors[Math.floor(Math.random() * colors.length)];

        return bcg;
    }
}