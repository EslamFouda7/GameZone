import { Injectable } from '@angular/core';
import { Game, gameDetails } from '../../../shared/modules/game';

@Injectable({
  providedIn: 'root',
})
export class favoritesService {
  getFavorites(): Game[] {
    const data = localStorage.getItem('favorites')
    return data ? JSON.parse(data) : []
  }
  addFavorites(game: gameDetails) {
    const fav = this.getFavorites();
    fav.push(game)
    localStorage.setItem('favorites', JSON.stringify(fav))
  }

  removeFavorites(id: number) {
    const fav = this.getFavorites().filter(g => g.id !== id)
    localStorage.setItem('favorites', JSON.stringify(fav))

  }
  isFavorites(id: number): boolean {
    return this.getFavorites().some(g => g.id === id)
  }
}
