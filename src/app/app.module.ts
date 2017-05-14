import "./shared/rxjs.imports";
import {ModuleWithProviders, NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./shared/services/in-memory-data.service";
import {AppComponent} from "./app.component";
import {HomeModule} from "./home/home.module";
import {HeaderComponent} from "./shared/layout/header.component";
import {CitiesModule} from "./city/cities.module";
import {SharedModule} from "./shared/shared.module";

const rootRouting: ModuleWithProviders = RouterModule.forRoot(
    [],
    {
        useHash: true
    }
);

//todo animations https://angular.io/docs/ts/latest/guide/router.html#!#adding-animations-to-the-routed-component

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent
    ],
    imports: [
        // BrowserAnimationsModule,
        FormsModule,
        BrowserModule,
        HttpModule,
        HomeModule,
        CitiesModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService, {
            delay: 50, rootPath: 'db/', passThruUnknownUrl: true
        }),
        rootRouting,
        SharedModule
    ],
    providers: [CitiesModule],
    bootstrap: [AppComponent],
    // export: [RouterModule]
})
export class AppModule {
}
