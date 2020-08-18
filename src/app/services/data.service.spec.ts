import { TestBed, inject } from '@angular/core/testing';

import { DataService } from './data.service';
import { Question } from '../models/question';
import { of } from 'rxjs';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('DataService', () => {
  // tslint:disable-next-line:prefer-const
  let typeQuestion: Question[];
  const dataURL = 'http://127.0.0.1:8080/faqs.json';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ DataService ]

    });
  });

  it('should be created', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));

  describe('getQuestions service', () => {
    it('should return a config object correctly', inject(
      [DataService, HttpTestingController], (dataService: DataService, backend: HttpTestingController) => {
        const result = of(typeQuestion);
        let response = null;

        dataService.getQuestions().subscribe(
          (receivedResponse: any) => { response = receivedResponse; },
          (error: any) => {response = error; }
        );

        const req = backend.expectOne({url: dataURL});
        req.flush(result);

        expect(req.request.method).toEqual('GET');
        expect(response).toEqual(result);
        backend.verify();
      }
    ));
    it('should return error if there were problems', inject(
      [DataService, HttpTestingController], (dataService: DataService, backend: HttpTestingController) => {
        let response = null;
        let errResponse = null;
        const mockErrorResponse = { status: 401, statusText: 'Bad Request' };
        const data = 'Invalid request parameters';

        dataService.getQuestions().subscribe(
          (receivedResponse: any) => { response = receivedResponse; },
          (error: any) => errResponse = error
        );
        backend.expectOne({url: dataURL}).flush(data, mockErrorResponse);

        expect(errResponse.error).toBe(data);
        backend.verify();
      }

    ));

  });
});
