import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/Rx";
import {map} from "rxjs/internal/operators";
import { Card } from '../models/card.model';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })
export class CardService {
  constructor(private http: HttpClient) { }


  searchCard(name: string ): Observable<Card[]> {
    return  this.http.get<Card[]>(`${environment.apiUrl}/cards`);
  }


  getCard(id: string ): Observable<Object> {
    return  this.http.get<Card>(`${environment.apiUrl}/cards/${id}`);
  }

  getMatiere(): Observable<Card[]> {
    return  this.http.get<Card[]>(`${environment.apiUrl}/matieres`);
  }

  createMatiere(body): Observable<Card> {
    return this.http.post<Card>(`${environment.apiUrl}/matieres`, body);
  }

  deleteMatiere(id): Observable<number> {
    return this.http.post<Card>(`${environment.apiUrl}/matieres/delete`, {'id': id})
      .pipe(map(response => id));
  }

  getAll() {
    return this.http.get('/movies');
  }

  searchWithName(name: string): Observable<BaseResponse> {
    return  this.http.get<BaseResponse>(`${environment.apiUrl}/cards?q=name:${name}`);
  }



}


export interface BaseResponse {
    data:  Card[];
}