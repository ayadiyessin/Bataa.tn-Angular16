import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/Modeles/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  tab:User[]; // hethy ken froont
  constructor( private httpClient :HttpClient){}

  OnGet(): Observable < User[] >
  {
     return this.httpClient.get<User[]>('http://127.0.01:8000/api/user');
  }

  OnSave(userToSave:any): Observable<any> // return observable( thread) ( teba3 ll patron obdervable)
  {

    return this.httpClient.post('http://127.0.01:8080/api/user',userToSave);

  }

  OnDelate(id:string):Observable<any> // type de rotourn dima Observable
  {
    return this.httpClient.delete(`http://127.0.01:8080/api/user/${id}`);
  }

  getUserById(id:string):Observable<User>
  {
    return this.httpClient.get<User>(`http://127.0.01:8080/api/user/${id}`);
  }
  updateUser(idc: string , user : User ) : Observable < any >
  {
    return this.httpClient.put(`http://127.0.01:8080/api/user/${idc}`,user);
  }


  confirmerUtilisateur(id: string):Observable<void> // type de rotourn dima Observable
  {
    return this.httpClient.put<void>(`http://127.0.0.1:8000/api/valid/${id}`, null);
  }
  OnGetNotifUser(): Observable < number >
  {
     return this.httpClient.get<number>('http://127.0.01:8000/api/getNotifactionCountUser');
  }
  OnGetCountUserNonValider(): Observable < string >
  {
     return this.httpClient.get<string>('http://127.0.01:8000/api/countUserEnAttende');
  }
  OnGetCountUserValider(): Observable < string >
  {
     return this.httpClient.get<string>('http://127.0.01:8000/api/countUsersValider');
  }
}

