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

  public isLoading: boolean = false;

  /**
   * * Injectar el servicio
   */
  constructor (private countriesService : CountriesService) {}
  searchByCapital(term: string) :void {

    this.isLoading = true;
    // Se debe suscribir al Observable para que se emita
    this.countriesService.searchCapital(term)
      .subscribe( countries => {
        this.countries = countries;
        this.isLoading = false;

      })
    console.log(term);
  }

  /*
  searchByCapital(term: string) :void {
    console.log('Desde By CapitalPage');
    console.log(term);

  } */
}
