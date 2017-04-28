/**
 * Created by Michal Mazur on 28.04.2017.
 */
import {Injectable} from "@angular/core";

@Injectable()
export class OpenWeatherService {
    // http://openweathermap.org/api

    private endpointUrl: string = "http://api.openweathermap.org/";
    private privateKey: string = "";

//todo keep open weather key in config
    // api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=
}