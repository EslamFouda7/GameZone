import { Component, effect, signal } from '@angular/core';
import { GamesServic } from '../../core/services/games/games-servic';
import { Game, Genre } from '../../shared/modules/game';
import { Card } from '../../shared/card/card';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-games',
  imports: [Card, RouterLink],
  templateUrl: './games.html',
  styleUrl: './games.css',
})
export class Games {
  genres = signal<Genre[]>([]);
  allGames: Game[] = [];
  games = signal<Game[]>([]);

  selectedGenre = signal<string>('All');

  constructor(private _gameServic: GamesServic) {}
  ngOnInit(): void {
    this.getGames();
    this.getGernes();
  }

  getGames() {
    this._gameServic.getGames().subscribe({
      next: (res: any) => {
        console.log(res.results);
        this.allGames = res.results;
        this.games.set(this.allGames);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  getGernes() {
    this._gameServic.getAllgenres().subscribe({
      next: (res: any) => {
        const all = { id: 0, name: 'All Genres', slug: 'All' };
        this.genres.set([all, ...res.results]);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  filterByGerne(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    if (value === 'All') {
      this.games.set(this.allGames);
      return;
    }
    const filtered = this.allGames.filter((game) => game.genres.some((g) => g.slug === value));
    this.games.set(filtered);
  }

  filterBySearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    const filtered = this.allGames.filter((game) => game.name.toLowerCase().includes(value));
     this.games.set(filtered);
  }
}
