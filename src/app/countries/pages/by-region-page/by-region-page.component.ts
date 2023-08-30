import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

type Region = 'Africa'|'America'|'Asia'|'Europe'|'Oceania';
@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  public regions : Region[] = ['Africa', 'America', 'Asia', 'Europe',  'Oceania'];
  public countries : Country[] = [];
  public selectedRegion?: Region;

  /**
   * * Injectar el servicio
   */
  constructor (private countriesService : CountriesService) {}

  searchByRegion(region: Region) :void {

    this.selectedRegion = region;

    // Se debe suscribir al Observable para que se emita
    this.countriesService.searchRegion(region)
      .subscribe( countries => {
        this.countries = countries;

      })
  }
}
