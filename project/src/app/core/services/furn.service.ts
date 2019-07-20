import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FurnitureI } from '../models/furn.interface';

@Injectable({
  providedIn: 'root'
})
export class FurnService {
  private readonly createUrl = 'http://localhost:5000/furniture/create';
  private readonly getAllUrl = 'http://localhost:5000/furniture/all';
  private readonly getDetailsUrl = 'http://localhost:5000/furniture/details/';
  private readonly getMyUrl = 'http://localhost:5000/furniture/user';
  private readonly deleteUrl = 'http://localhost:5000/furniture/delete/';
  private readonly editUrl = 'http://localhost:5000/furniture/edit/';


  constructor(private http : HttpClient) { }

  createFurnitureS(body){
    return this.http.post(this.createUrl, body);
  }

  getAllFurnitureS(): Observable<FurnitureI[]>{
    return this.http.get<FurnitureI[]>(this.getAllUrl);
  }

  getDetailsS(id): Observable<FurnitureI>{
    return this.http.get<FurnitureI>(this.getDetailsUrl + id);
  }

  getMyFurnitureS(): Observable<FurnitureI[]>{
    return this.http.get<FurnitureI[]>(this.getMyUrl);
  }

  delFurnitureS(id) {
    return this.http.delete(this.deleteUrl + id);
  }

  editFurnitureS(id, body){
    return this.http.put(this.editUrl + id, body);
  }

}
