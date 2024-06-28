import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from 'src/Modeles/Photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor( private httpClient :HttpClient){}
  getimagebyproduit(id:string):Observable<String[]>
  {
    return this.httpClient.get<String[]>(`http://127.0.01:8000/api/photos/${id}`);
  }

  OnSave(photoToSave:any): Observable<any> // return observable( thread) ( teba3 ll patron obdervable)
  {

    return this.httpClient.post('http://127.0.01:8000/api/photo',photoToSave);

  }
}
