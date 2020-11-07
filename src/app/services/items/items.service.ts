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
    console.log("check this out");


  }
   private url = "localhost:8000/listItems/1";



  fetchItems(userid: string = '1'): Observable<any[]>
  {
      return (this.httpClient.get<any>(this.url).pipe(map(res => {
         console.log(res.json());
         return res.json();
      })));




  }


}



