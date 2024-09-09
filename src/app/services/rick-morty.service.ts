import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {

  //https://rickandmortyapi.com/api/character
  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  public getCharacters(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

}
