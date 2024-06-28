import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateur } from 'src/Modeles/Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  tab:Utilisateur[]; // hethy ken froont
  
  constructor( private httpClient :HttpClient){}

  OnGet(): Observable < Utilisateur[] >
  {
     return this.httpClient.get<Utilisateur[]>('http://127.0.0.1:8000/api/utilisateur');
  }

  OnSave(utilisateurToSave:any): Observable<any> // return observable( thread) ( teba3 ll patron obdervable)
  {

    return this.httpClient.post('http://127.0.0.1:8000/api/utilisateur',utilisateurToSave);

  }

  OnDelate(id:string):Observable<any> // type de rotourn dima Observable
  {
    return this.httpClient.delete(`http://127.0.0.1:8000/api/utilisateur/${id}`);
  }

  getUtilisateurById(id:string):Observable<Utilisateur>
  {
    return this.httpClient.get<Utilisateur>(`http://127.0.0.1:8000/api/utilisateur/${id}`);
  }
  updateUtilisateur(idu: string , utilisateur : Utilisateur ) : Observable < any >
  {
    return this.httpClient.put(`http://127.0.0.1:8000/api/utilisateur/${idu}`,utilisateur);
  }
  getAcheteurNonConfirmer()
  {
    return this.httpClient.get<Utilisateur[]>('http://127.0.0.1:8000/api/AcheteurNonConfirmer');
 }
 getAcheteurConfirmer()
 {
   return this.httpClient.get<Utilisateur[]>('http://127.0.0.1:8000/api/AcheteursConfirmer');
}
getVendeurs()
{
 return this.httpClient.get<Utilisateur[]>('http://127.0.0.1:8000/api/Vendeurs');
}


}

