import { Component, OnInit, signal } from '@angular/core';
import { GamesServic } from '../../core/services/games-servic';
import { ActivatedRoute } from '@angular/router';
import { gameDetails } from '../../shared/modules/game';

@Component({
  selector: 'app-game-details',
  imports: [],
  templateUrl: './game-details.html',
  styleUrl: './game-details.css',
})
export class GameDetails implements OnInit {
  constructor(private _gameServic: GamesServic, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.gameDatils();
  }
  gameDitails = signal<gameDetails>({
    id: 0,
    slug: '',
    name: '',
    description_raw: '',
    background_image: null,
    screenshots_count: 0,
    movies_count: 0,
    rating: 0,
    rating_top: 0,
    ratings: [],
    metacritic: 0,
    metacritic_url: '',
    genres: [],
    parent_platforms: [],
    added: 0,
    game_series_count: 0,
    website: '',
    released:''
  });
  gameDatils() {
    const gameId = Number(this.route.snapshot.paramMap.get('id'));
    this._gameServic.getGameDetails(gameId).subscribe({
      next: (res: any) => {
        this.gameDitails.set(res);
        console.log(this.gameDitails());
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
