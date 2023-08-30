import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit {

  public countries : Country[] = [];
  public initialValue:string = '';


  /**
   * * Injectar el servicio
   */
  constructor (private countriesService : CountriesService) {}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountries.countries;
    this.initialValue = this.countriesService.cacheStore.byCountries.term;
  }

  searchByCountry(term: string) :void {
    // Se debe suscribir al Observable para que se emita
    this.countriesService.searchCountry(term)
      .subscribe( countries => {
        this.countries = countries;

      })
    console.log(term);
  }

}
