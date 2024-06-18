import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, tap} from "rxjs";
import {UserData} from "../interfaces/user-info.interface";

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  private http = inject(HttpClient)
  private baseURL = 'https://reqres.in/api/users'


  getUserByID(id: number): Observable<any>{
    return this.http.get<any>(`${this.baseURL}/${id}`)
      .pipe(
      map(response => response.data),
        tap(console.log)
    )
  }


}
