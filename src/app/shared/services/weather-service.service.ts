/**
 * Created by Michal Mazur on 28.04.2017.
 */
import {Injectable, OnInit} from "@angular/core";
import {environment} from "../../../environments/environment";
import {Http, Response} from "@angular/http";
import {City} from "../models/city.model";
import {Observable} from "rxjs";
import "rxjs/add/operator/map";

@Injectable()
export class OpenWeatherService implements OnInit
{
    private endpointUrl: string = "http://api.openweathermap.org/data/2.5/";
    private privateKey: string = "";

    private lastResponse = null;
    private loading: boolean = false;

    constructor(private http: Http)
    {
        this.loading = false;

        this.privateKey = environment.api.owm.key;
        // console.debug(environment);

        if (!this.privateKey)
            throw new Error("Open Weather map private key is not set in environemtn config");
    }

    ngOnInit(): void
    {

    }

    /**
     *  /**
     * coord
     coord.lon City geo location, longitude
     coord.lat City geo location, latitude
     weather (more info Weather condition codes)
     weather.id Weather condition id
     weather.main Group of weather parameters (Rain, Snow, Extreme etc.)
     weather.description Weather condition within the group
     weather.icon Weather icon id
     base Internal parameter
     main
     main.temp Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
     main.pressure Atmospheric pressure (on the sea level, if there is no sea_level or grnd_level data), hPa
     main.humidity Humidity, %
     main.temp_min Minimum temperature at the moment. This is deviation from current temp that is possible for large cities and megalopolises geographically expanded (use these parameter optionally). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
     main.temp_max Maximum temperature at the moment. This is deviation from current temp that is possible for large cities and megalopolises geographically expanded (use these parameter optionally). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
     main.sea_level Atmospheric pressure on the sea level, hPa
     main.grnd_level Atmospheric pressure on the ground level, hPa
     wind
     wind.speed Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
     wind.deg Wind direction, degrees (meteorological)
     clouds
     clouds.all Cloudiness, %
     rain
     rain.3h Rain volume for the last 3 hours
     snow
     snow.3h Snow volume for the last 3 hours
     dt Time of data calculation, unix, UTC
     sys
     sys.type Internal parameter
     sys.id Internal parameter
     sys.message Internal parameter
     sys.country Country code (GB, JP etc.)
     sys.sunrise Sunrise time, unix, UTC
     sys.sunset Sunset time, unix, UTC
     id City ID
     name City name
     cod Internal parameter
     */
    getCityWeather(city: City): Observable<Object>
    {
        //api.openweathermap.org/data/2.5/weather?q={city name},{country code}

        let service = "weather";
        let data = {"q": `${city.name}${city.country ? "," + city.country : ""}`};

        return this._callApi(service, data);
    }

    _callApi(service: string, data?: Object): Observable<Object>
    {
        let params: URLSearchParams = new URLSearchParams();
        let url = this.endpointUrl + service;

        data = data ? data : {};

        data["units"] = "metric";
        data["APPID"] = this.privateKey;
        for (let name in data)
        {
            params.set(name, data[name] as string);
        }

        this.lastResponse = null;
        this.loading = true;

        return this.http.get(url + "?" + params.toString())
            .map(this.onHttpResponse)
            .catch(this.onHttpError);
    }

    onHttpResponse(res: Response): Object
    {
        this.loading = false;
        this.lastResponse = res.json();

        console.debug(this.lastResponse);

        return this.lastResponse;
    }

    onHttpError(error: any): any
    {
        console.info(`error: ${error}`);

        this.loading = false;
        this.lastResponse = error.json();

        return Observable.throw(error.json().error || 'Server error');
    }
}