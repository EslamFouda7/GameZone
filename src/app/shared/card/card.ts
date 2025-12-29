import { Component, Input } from '@angular/core';
import { GamesServic } from '../../core/services/games/games-servic';
import { Game } from '../modules/game';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
@Input() game!: Game;
 
}
