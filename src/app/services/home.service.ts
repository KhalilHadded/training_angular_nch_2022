import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";

type arrayResponse = HttpResponse<any[]>;

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  url: string = 'https://jsonplaceholder.typicode.com/todos/';

  constructor(
    protected http: HttpClient
  ) { }

  public getData(): Observable<arrayResponse> {
    return this.http.get<any[]>(this.url,{observe:'response'});
}



}
