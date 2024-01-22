import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Result, RickMorty } from '../interface/rickmorty.interface';

@Injectable({
  providedIn: 'root',
})
export class RickmortyService {
  private readonly apiUrl = environment.apiRickMorty;
  private readonly http = inject(HttpClient);

  //todo: Personaje
  charactersMorty(): Observable<RickMorty> {
    return this.http.get<RickMorty>(this.apiUrl + 'character');
  }

  charactersNext(url: string): Observable<RickMorty> {
    return this.http.get<RickMorty>(url);
  }
}
