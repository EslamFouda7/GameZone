import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Game } from '../../shared/modules/game';

@Injectable({
  providedIn: 'root',
})
export class GamesServic {
  private http = inject(HttpClient)
  getGames(): Observable<Game> {
    return this.http.get<Game>(`${environment.baseUrl}/games?key=${environment.baseKey}`)
  }
}
