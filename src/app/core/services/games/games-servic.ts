import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Game, Genre, screenshots } from '../../../shared/modules/game';


@Injectable({
  providedIn: 'root',
})
export class GamesServic {
  private http = inject(HttpClient);

  getGames(): Observable<Game> {
    return this.http.get<Game>(`${environment.baseUrl}/games?key=${environment.baseKey}`);
  }
  getGameDetails(id: number) {
    return this.http.get<Game>(`${environment.baseUrl}/games/${id}?key=${environment.baseKey}`);
  }

  getAllgenres(): Observable<Genre> {
    return this.http.get<Genre>(`${environment.baseUrl}/genres?key=${environment.baseKey}`);
  }

  getScreenshots(id: number): Observable<screenshots> {
    return this.http.get<screenshots>(`${environment.baseUrl}/games/${id}/screenshots?key=${environment.baseKey}`)
  }
}
