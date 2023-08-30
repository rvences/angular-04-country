import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {

  public countries : Country[] = [];

  /**
   * * Injectar el servicio
   */
  constructor (private countriesService : CountriesService) {}
  searchByCountry(term: string) :void {
    // Se debe suscribir al Observable para que se emita
    this.countriesService.searchCountry(term)
      .subscribe( countries => {
        this.countries = countries;

      })
    console.log(term);
  }

}
