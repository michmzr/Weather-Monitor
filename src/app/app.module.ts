import {ModuleWithProviders, NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
// Imports for loading & configuring the in-memory web api
import {InMemoryWebApiModule} from "angular-in-memory-web-api";

import {AppComponent} from "./app.component";
import {CitiesListModule} from "./citiesList/cities-list.module";
import {HomeModule} from "./home/home.module";
import {HeaderComponent} from "./shared/layout/header.component";
import {InMemoryDataService} from "./shared/services/in-memory-data.service";

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], {useHash: true});

@NgModule({
    imports: [
        FormsModule,
        BrowserModule,
        HttpModule,
        HomeModule,
        CitiesListModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        rootRouting
    ],
    declarations: [
        AppComponent,
        HeaderComponent
	],
    providers: [CitiesListModule],
	bootstrap: [AppComponent]
})
export class AppModule {
}
