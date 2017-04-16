import {CommonModule} from "@angular/common";
import {ModuleWithProviders, NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {CitiesListComponent} from "./cities-list.component";
import {CityAddComponent} from "./city-add.component";
import {CityWeatherComponent} from "./city-weather.component";

const citiesListRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: "citiesList",
        component: CitiesListComponent
    }
]);
@NgModule({
    imports: [
        FormsModule,
        citiesListRouting,
        CommonModule
    ],
    declarations: [
        CitiesListComponent,
        CityWeatherComponent,
        CityAddComponent
    ]
})
export class CitiesListModule
{
}
