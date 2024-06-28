import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enchere } from 'src/Modeles/Enchere';

@Injectable({
  providedIn: 'root'
})
export class EnchereService {

  constructor( private httpClient :HttpClient){}
  getlisteProduitEncherespaerClientAcheter(id:string):Observable< Enchere[] >
  {
    return this.httpClient.get<Enchere[]>(`http://127.0.01:8000/api/listeProduitEncherespaerClientAcheter/${id}`);
  }
  getMaxPrixEnchere(id:string):Observable<any>{
    return this.httpClient.get<any>(`http://127.0.01:8000/api/MaxPrixProduits/${id}`);
  }
  getlisteProduitEncherespaerproduit(id:string):Observable< Enchere[]>
  {
    return this.httpClient.get<Enchere[]>(`http://127.0.01:8000/api/listeProduitencheresParProd/${id}`);
  }


}
