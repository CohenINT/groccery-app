import { Injectable } from '@angular/core';
import {Item} from '../../types/Item';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private httpClient: HttpClient) {
    console.log('ItemService has been initiated.');



  }
   private url = 'localhost:8000/listItems/';



  fetchItems(userid: string = '1'): Observable<any[]>
  {
      this.url += userid; // Attaching the userid as parameter for the endpoint.

      return (this.httpClient.get<any>(this.url).pipe(map(res => {
         console.log('FetchItems() has been called , trying to get returned data from endpoint');
         console.log(res.json());
         return res.json();
      })));




  }


}



