import {inject, TestBed} from "@angular/core/testing";

import {CitiesService} from "./cities-service.service";

describe('CitiesServiceService', () =>
{
    beforeEach(() =>
    {
        TestBed.configureTestingModule({
            providers: [CitiesService]
        });
    });

    it('should ...', inject([CitiesService], (service: CitiesService) =>
    {
        expect(service).toBeTruthy();
    }));
});
