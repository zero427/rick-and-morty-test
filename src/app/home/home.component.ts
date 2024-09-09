import { Component } from '@angular/core';
import { RickMortyService } from '../services/rick-morty.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private rickMortyService: RickMortyService){}

  public result:any;


  callRickMortyAPI(): void{
    console.log("entro");

    this.rickMortyService.getCharacters().subscribe(
      response => {
        console.log('data:', response.results
        );

        this.result = response.results;

      },
      error => {
        console.error('Error fetching weather data:', error);
      }
    );
  }
}
