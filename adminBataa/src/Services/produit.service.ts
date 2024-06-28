import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from 'src/Modeles/Produit';
import { Utilisateur } from 'src/Modeles/Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  tab:Produit[]; // hethy ken froont
  constructor( private httpClient :HttpClient){}

  OnGet(): Observable < Produit[] >
  {
     return this.httpClient.get<Produit[]>('http://127.0.01:8000/api/produit');
  }

  OnSave(produitToSave:any): Observable<any> // return observable( thread) ( teba3 ll patron obdervable)
  {

    return this.httpClient.post('http://127.0.01:8000/api/produit',produitToSave);

  }

  OnDelate(id:string):Observable<any> // type de rotourn dima Observable
  {
    return this.httpClient.delete(`http://127.0.01:8000/api/produit/${id}`);
  }

  getProduitById(id:string):Observable<Produit>
  {
    return this.httpClient.get<Produit>(`http://127.0.01:8000/api/produit/${id}`);
  }
  updateProduit(idp: string , produit : Produit ) : Observable < any >
  {
    return this.httpClient.put(`http://127.0.01:8000/api/produit/${idp}`,produit);
  }
  getProduitValider(): Observable < Produit[] >
  {
     return this.httpClient.get<Produit[]>('http://127.0.01:8000/api/ProduitValider');
  }
  getProduitNonValider(): Observable < Produit[] >
  {
     return this.httpClient.get<Produit[]>('http://127.0.01:8000/api/ProduitNonValider');
  }
  // getProduitByUser(idu: string , utilisateur : Utilisateur): Observable < Produit[] >
  // {
  //    return this.httpClient.get<Produit[]>(`http://127.0.01:8000/api/produit/${idu}`,utilisateur);
  // }
  getProduitByUser(idu: string): Observable<Produit[]> {
    return this.httpClient.get<Produit[]>(`http://127.0.0.1:8000/api/produitbyuser/${idu}`);
      // params: { utilisateur: utilisateur.id } // si id est le champ clé de l'utilisateur );
 }
 confirmerProduit(id: string):Observable<void> // type de rotourn dima Observable
  {
    return this.httpClient.put<void>(`http://127.0.0.1:8000/api/ValiderProduit/${id}`, null);
  }
  OnGetVendeur(): Observable < Produit[] >
  {
     return this.httpClient.get<Produit[]>('http://127.0.01:8000/api/vendeurs');
  }
  OnGetNotification(): Observable < number >
  {
     return this.httpClient.get<number>('http://127.0.01:8000/api/getNotifactionCountProd');
  }
  OnGetCountProduitValider(): Observable < string >
  {
     return this.httpClient.get<string>('http://127.0.01:8000/api/countProduitsEnchere');
  }
  OnGetCountProduitNonValider(): Observable < string >
  {
     return this.httpClient.get<string>('http://127.0.01:8000/api/countProduitEnAttende');
  }
  OnGetCountVendeurValider(): Observable < number >
{
    return this.httpClient.get<number>('http://127.0.01:8000/api/countVendeurEnAttente');
}

}

