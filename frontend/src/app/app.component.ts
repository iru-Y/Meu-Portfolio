import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HttpClientModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'meu_portfolio';
}
