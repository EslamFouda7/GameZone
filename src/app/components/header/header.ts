import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isScrolled = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 20);
  }

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
