import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';


@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit {

  public regions : Region[] = ['Africa', 'America', 'Asia', 'Europe',  'Oceania'];
  public countries : Country[] = [];
  public selectedRegion?: Region;

  /**
   * * Injectar el servicio
   */
  constructor (private countriesService : CountriesService) {}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;

  }

  searchByRegion(region: Region) :void {

    this.selectedRegion = region;

    // Se debe suscribir al Observable para que se emita
    this.countriesService.searchRegion(region)
      .subscribe( countries => {
        this.countries = countries;

      })
  }
}
