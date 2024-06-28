import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categorie } from 'src/Modeles/Categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  // tab:Categorie[]; // hethy ken froont
  constructor( private httpClient :HttpClient){}

  OnGet(): Observable < Categorie[] >
  {
     return this.httpClient.get<Categorie[]>('http://127.0.01:8000/api/categories');
  }

  OnSave(categorieToSave:any): Observable<void> // return observable( thread) ( teba3 ll patron obdervable)
  {

    return this.httpClient.post<void>('http://127.0.01:8000/api/categories',categorieToSave);

  }

  OnDelate(id:string):Observable<void> // type de rotourn dima Observable
  {
    return this.httpClient.put<void>(`http://127.0.0.1:8000/api/Archivecategorie/${id}`, null);
  }


  getCategorieById(id:string):Observable<Categorie>
  {
    return this.httpClient.get<Categorie>(`http://127.0.01:8000/api/categories/${id}`);
  }
  updateCategorie(idc: string , categorie : Categorie ) : Observable < any >
  {
    return this.httpClient.put(`http://127.0.01:8000/api/categories/${idc}`,categorie);
  }
  OnGetCountCategorieArchiver(): Observable < string >
  {
     return this.httpClient.get<string>('http://127.0.01:8000/api/countCategorieArchiver');
  }
  OnGetCountCategorieValider(): Observable < string >
  {
     return this.httpClient.get<string>('http://127.0.01:8000/api/countCategorieValider');
  }
}

