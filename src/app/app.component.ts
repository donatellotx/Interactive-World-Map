import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WorldMapComponent } from './world-map/world-map.component';
import { CountryInfoComponent } from './country-info/country-info.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WorldMapComponent, CountryInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  chosenSvgId: string = '';
  chosenIncome: string = '';
  chosenCapital: string = '';
  chosenRegion: string = '';
  chosenLatitude: number = 0;
  chosenLongitude: number = 0;

  onSvgIdChosen(svgId: string) {
    this.chosenSvgId = svgId;
  }

  onIncomeChosen(incomeId: string) {
    this.chosenIncome = incomeId;
  }

  onCapitalChosen(capital: string) {
    this.chosenCapital = capital;
  }

  onRegionChosen(region: string) {
    this.chosenRegion = region;
  }

  onLatitudeChosen(latitude: number) {
    this.chosenLatitude = latitude;
  }

  onLongitudeChosen(longitude: number) {
    this.chosenLongitude = longitude;
  }
}
