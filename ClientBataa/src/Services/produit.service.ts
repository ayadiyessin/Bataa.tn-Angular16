import { Injectable } from '@angular/core';
import { Produit } from 'src/Modeles/Produit';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  tab!:Produit[]; // hethy ken froont
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

  getproduitbyuser(id:string):Observable<any> // type de rotourn dima Observable
  {
    return this.httpClient.get(`http://127.0.01:8000/api/produitbyuser/${id}`);
  }

  getProduitByScat(id:string):Observable<Produit[]>
  {
    return this.httpClient.get<Produit[]>(`http://127.0.0.1:8000/api/produitbyscat/${id}`);
  }

  getCountProduitByScat(id:string):Observable<string>
  {
    return this.httpClient.get<string>(`http://127.0.0.1:8000/api/countproduitbyscat/${id}`);
  }
  getProduitsNonValiderBySCategorie(id:string):Observable<Produit[]>
  {
    return this.httpClient.get<Produit[]>(`http://127.0.0.1:8000/api/produitNonValiderbyscat/${id}`);
  }

  //yessin
  rechercheProduit(id:string, etatProduit: string):Observable<Produit[]> {
    return this.httpClient.get<Produit[]>(`http://127.0.0.1:8000/api/rechercheProduit/${id}/${etatProduit}`);
  }

  ////////////////v2
  GetProduits(): Observable < Produit[] >
  {
     return this.httpClient.get<Produit[]>('http://127.0.01:8000/api/getproduits');
  }
  ////// yessin 26/04
  PutupdateEtatVenteProd(id:string):Observable<void> // type de rotourn dima Observable
  {
    return this.httpClient.put<void>(`http://127.0.0.1:8000/api/updateEtatVenteProd/${id}`, null);
  }


}
