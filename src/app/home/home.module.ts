import {HomeComponent} from "./home.component";
import {NgModule, ModuleWithProviders} from "@angular/core";
import {RouterModule} from "@angular/router";

const homeRouting: ModuleWithProviders = RouterModule.forChild([
	{
		path: '',
		component: HomeComponent
	}
]);

@NgModule({
	imports: [
		homeRouting
	],
	declarations: [
		HomeComponent
	],
})
export class HomeModule {
}
