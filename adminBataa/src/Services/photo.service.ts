import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from 'src/Modeles/Photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor( private httpClient :HttpClient){}
  getimagebyproduit(id:string):Observable<Photo[]>
  {
    return this.httpClient.get<Photo[]>(`http://127.0.01:8000/api/photos/${id}`);
  }
}
