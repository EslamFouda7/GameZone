import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, signal } from '@angular/core';
import { GamesServic } from '../../core/services/games/games-servic';
import { ActivatedRoute } from '@angular/router';
import { gameDetails, screenshots } from '../../shared/modules/game';
import { favoritesService } from '../../core/services/favorites/favorites-servic';

@Component({
  selector: 'app-game-details',
  imports: [],
  templateUrl: './game-details.html',
  styleUrl: './game-details.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GameDetails implements OnInit {
  constructor(private _gameServic: GamesServic, private route: ActivatedRoute, private _favoritesService: favoritesService) { }

  ngOnInit(): void {
    this.gameDatils();
    this.getScreenshot();
    const gameId = Number(this.route.snapshot.paramMap.get('id'));
    this.isFav.set(this._favoritesService.isFavorites(gameId));
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
    parent_platforms: [

    ],
    added: 0,
    game_series_count: 0,
    website: '',
    released: ''
  });

  gameScreenshots = signal<screenshots[]>([])




  gameDatils() {
    const gameId = Number(this.route.snapshot.paramMap.get('id'));
    this._gameServic.getGameDetails(gameId).subscribe({
      next: (res: any) => {
        this.gameDitails.set(res);
        console.log(this.gameDitails());
        console.log(this.gameDitails().parent_platforms);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }


  getScreenshot() {
    const gameId = Number(this.route.snapshot.paramMap.get('id'));
    this._gameServic.getScreenshots(gameId).subscribe({
      next: (res: any) => {
        console.log(res)
        this.gameScreenshots.set(res.results);
        console.log(this.gameScreenshots())
      },
      error: (err) => {
        console.log(err)
      }
    })
  }


  isFav = signal<boolean>(false);


  addToFavorites() {

    const game = this.gameDitails();
    const gameId = Number(this.route.snapshot.paramMap.get('id'));
    if (this._favoritesService.isFavorites(gameId)) {
      this._favoritesService.removeFavorites(gameId);
      this.isFav.set(false)
    }
    else {
      this._favoritesService.addFavorites(game);
      this.isFav.set(true);
    }
    console.log(localStorage.getItem('favorites'))
  }

}
