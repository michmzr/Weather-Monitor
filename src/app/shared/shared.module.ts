/**
 * Created by Michal Mazur on 28.04.2017.
 */
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {CityAddComponent} from "../city/city-add.component";
import {CityDetailsComponent} from "../city/city-details.component";
import {CityWeatherBlockComponent} from "./parts/city-weather-block.component";
import {CitiesListComponent} from "../city/cities-list.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule
    ],
    declarations: [
        CitiesListComponent,
        CityWeatherBlockComponent,
        CityDetailsComponent,
        CityAddComponent,
    ],
    exports: [
        CitiesListComponent,
        CityWeatherBlockComponent,
        CityDetailsComponent,
        CityAddComponent,

        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule,
    ]
})
export class SharedModule {
}

