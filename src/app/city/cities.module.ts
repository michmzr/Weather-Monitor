/**
 * Created by Michal Mazur on 28.04.2017.
 */
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "../shared/services/in-memory-data.service";
import {SharedModule} from "../shared/shared.module";
import {CitiesRoutingModule} from "./cities-routing.module";
import {CurrentWeather} from "../shared/models/current-weather.model";
import {CityCurrentWeatherComponent} from "../weather/city-current-weather.component";

@NgModule({
    declarations: [
        // CityCurrentWeatherComponent
    ],
    imports: [
        FormsModule,
        CitiesRoutingModule,
        CommonModule,
        SharedModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
    ]
})
export class CitiesModule {
}