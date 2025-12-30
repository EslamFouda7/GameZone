import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { NgxSpinnerModule } from "ngx-spinner";
import { LoadingSpinner } from "./shared/loading-spinner/loading-spinner";
import AOS from "aos";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, NgxSpinnerModule, LoadingSpinner],
  templateUrl: './app.html',
  styleUrl: './app.css',

})
export class App implements OnInit {
  protected readonly title = signal('GameZone');
  loading = signal<boolean>(true);
  ngOnInit(): void {
     AOS.init();
  
  }
}
