import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SousCategorie } from 'src/Modeles/SousCategorie';

@Injectable({
  providedIn: 'root'
})
export class SouscategorieService {

  constructor( private httpClient :HttpClient){}
  OnGet(id:string): Observable < SousCategorie[] >
  {
     return this.httpClient.get<SousCategorie[]>(`http://127.0.01:8000/api/SousCat/${id}`);
  }
  OnSave(ScategorieToSave:any): Observable<void> // return observable( thread) ( teba3 ll patron obdervable)
  {

    return this.httpClient.post<void>('http://127.0.01:8000/api/souscategories',ScategorieToSave);

  }
  OnDelate(id:string):Observable<void> // type de rotourn dima Observable
  {
    return this.httpClient.put<void>(`http://127.0.0.1:8000/api/ArchiveSouscategorie/${id}`, null);
  }

  OnGetByCateg(id:string): Observable < SousCategorie[] >
  {
     return this.httpClient.get<SousCategorie[]>(`http://127.0.01:8000/api/SousCatNonArchiv/${id}`);
  }
}
