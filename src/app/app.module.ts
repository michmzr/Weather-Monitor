import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ModuleWithProviders} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HomeComponent} from "./home/home.component";
import {HeaderComponent} from "./shared/layout/header.component";
import {RouterModule} from "@angular/router";
import {HomeModule} from "./home/home.module";

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], {useHash: true});

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		HomeModule,
		rootRouting
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
