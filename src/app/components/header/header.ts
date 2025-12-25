import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  links = [
    {
      text: 'Home',
      path: 'home'
    },
    {
      text: 'Games',
      path: 'games'
    },
    {
      text: 'Favorites',
      path: 'favorites'
    }
  ]

}
