import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enchere } from 'src/Modeles/Enchere';

@Injectable({
  providedIn: 'root'
})
export class EnchereService {

  constructor( private httpClient :HttpClient){}

  listeProduitEncherespaerClientNonValider(id:string):Observable< Enchere[] >
  {
    return this.httpClient.get<Enchere[]>(`http://127.0.01:8000/api/listeProduitEncherespaerClientNonValider/${id}`);
  }

  listeProduitEncherespaerClientValider(id:string):Observable< Enchere[] >
  {
    return this.httpClient.get<Enchere[]>(`http://127.0.01:8000/api/listeProduitEncherespaerClientValider/${id}`);
  }

  postProduitEnchere(idp:string, idu:string,ench:any):Observable<any>
  {
    return this.httpClient.post(`http://127.0.01:8000/api/AjoutEnchere/${idu}/${idp}`,ench);
  }

  getMaxPrixEnchere(idp:string):Observable<any>
  {
    return this.httpClient.get(`http://127.0.01:8000/api/MaxPrixProduits/${idp}`);
  }

  getProduitUserEnchere(idp:string,idu:string):Observable<any>
  {
    return this.httpClient.get(`http://127.0.01:8000/api/listeEncherers/${idu}/${idp}`);
  }
  putProduitUserEnchere(ide:string ,encher : any ):Observable<void>
  {
    return this.httpClient.put<void>(`http://127.0.01:8000/api/updateEnchere/${ide}`, encher) ;
  }
  // yessin 26/04
  getEncherParmaxPrixProd(id:string):Observable<Enchere>
  {
    return this.httpClient.get<Enchere>(`http://127.0.01:8000/api/ProduitsMaxPrixProduits/${id}`);
  }
  
  PutValiderEnchere(id:string):Observable<void> // type de rotourn dima Observable
  {
    return this.httpClient.put<void>(`http://127.0.0.1:8000/api/ValiderEnchere/${id}`, null);
  }
}
