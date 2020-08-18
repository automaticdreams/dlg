import { Injectable } from '@angular/core';
import { Question } from '../models/question';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  private questionsUrl = 'http://127.0.0.1:8080/faqs.json';

  private static handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError(error);
  }

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.questionsUrl).pipe(
      catchError(DataService.handleError)
    );
  }
}
