import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Card } from '../../shared/card/card';
import { GamesServic } from '../../core/services/games-servic';
import { Game } from '../../shared/modules/game';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink, Card],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing implements OnInit {
  websiteData = [
    {
      text: 'Games',
      Count: '1000',
    },
    {
      text: 'Players',
      Count: '30K',
    },
    {
      text: 'Genres',
      Count: '100',
    },
  ];

  games = signal<Game[]>([]);

  constructor(private _gamesServic: GamesServic) {}
  ngOnInit(): void {
    this.getGames();
  }

  getGames() {
    this._gamesServic.getGames().subscribe({
      next: (res: any) => {
        this.games.set(res.results)
        console.log(this.games);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
