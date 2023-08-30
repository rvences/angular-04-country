import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  public countries : Country[] = [];

  /**
   * * Injectar el servicio
   */
  constructor (private countriesService : CountriesService) {}
  searchByRegion(term: string) :void {
    // Se debe suscribir al Observable para que se emita
    this.countriesService.searchRegion(term)
      .subscribe( countries => {
        this.countries = countries;

      })
    console.log(term);
  }
}
