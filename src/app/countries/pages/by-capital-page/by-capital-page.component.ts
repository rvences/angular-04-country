import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

  public countries : Country[] = [];

  /**
   * * Injectar el servicio
   */
  constructor (private countriesService : CountriesService) {}
  searchByCapital(term: string) :void {
    // Se debe suscribir al Observable para que se emita
    this.countriesService.searchCapital(term)
      .subscribe( countries => {
        this.countries = countries;

      })
    console.log(term);
  }

  /*
  searchByCapital(term: string) :void {
    console.log('Desde By CapitalPage');
    console.log(term);

  } */
}
