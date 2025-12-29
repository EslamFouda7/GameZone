import { Component, OnInit } from '@angular/core';
import { Game } from '../../shared/modules/game';
import { favoritesService } from '../../core/services/favorites/favorites-servic';
import { Card } from "../../shared/card/card";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-favorites',
  imports: [Card, RouterLink],
  templateUrl: './favorites.html',
  styleUrl: './favorites.css',
})
export class Favorites implements OnInit {
  favorites: Game[] = [];
  constructor(private _favoritesService: favoritesService) { }
  ngOnInit(): void {
    this.favorites = this._favoritesService.getFavorites()
    console.log(this.favorites)
  }


  footSecData = [
    {
      icon: '🎮',
      mainTitle: 'Browse Games',
      subTitle: 'Explore our collection of amazing games'
    },
    {
      icon: '♡',
      mainTitle: 'Add Favorites',
      subTitle: 'Click the heart icon to save games'
    },
    {
      icon: '⭐',
      mainTitle: 'Track Progress',
      subTitle: 'Keep all your favorite games in one place'
    }
  ]
}
