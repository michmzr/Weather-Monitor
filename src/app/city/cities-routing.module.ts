/**
 * Created by Michal Mazur on 28.04.2017.
 */
import {NgModule, ModuleWithProviders} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CitiesListComponent} from "./cities-list.component";
import {CityAddComponent} from "./city-add.component";
import {CityDetailsComponent} from "./city-details.component";

/*const citiesRouting: Routes = [
 {
 path: 'cities',
 component: CitiesListComponent,
 children: [
 {
 path: '',
 component: CitiesListComponent,
 children: [
 {
 path: "add",
 component: CityAddComponent,
 },
 {
 path: "details/:id",
 component: CityDetailsComponent
 }
 ]
 }
 ]
 }
 ];*/

const citiesRouting: ModuleWithProviders = RouterModule.forChild(
    [
        {
            path: 'cities',
            component: CitiesListComponent,
        },
        {
            path: "cities/add",
            component: CityAddComponent
        },
        {
            path: "cities/details/:id",
            component: CityDetailsComponent
        }
    ]);

@NgModule({
    imports: [
        // RouterModule.forChild(citiesRouting),
        citiesRouting
    ],
    exports: [
        RouterModule
    ]
})
export class CitiesRoutingModule {
}