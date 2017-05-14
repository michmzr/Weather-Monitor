/**
 * Created by Michal Mazur on 28.04.2017.
 */

export class City
{
    public id: number;
    public name: string;

    /**
     * ISO 3166 country code like EN,PL
     */
    public country: string;

    constructor(id: number, name: string, country: string = "PL")
    {
        this.id = id;
        this.name = name;
        this.country = country;
    }
}