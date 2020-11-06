import { Injectable } from '@angular/core';
import IItem from '../../types/IItem';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private httpClient: HttpClient) {

    this.fetchItems("add").subscribe(res=>{
      console.log(res);
    });

  }
   private url = "localhost:8000/listItems/1";

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

  fetchItems(userid: string = '1'): Observable<IItem[]>
  {
      return this.httpClient.get<IItem[]>(`${this.url}`).pipe(map((response: any) => {
        console.log("******");
        console.log(response.json());

        return  response.json();
      } ));

  }
}



