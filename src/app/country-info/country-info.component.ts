import { Component, Input, OnInit } from '@angular/core';
import { WorldMapComponent } from '../world-map/world-map.component';


@Component({
  selector: 'app-country-info',
  imports: [],
  templateUrl: './country-info.component.html',
  styleUrl: './country-info.component.css'
})
export class CountryInfoComponent implements OnInit{
  @Input() countryId!: string;
  @Input() countryIncome!: string;
  @Input() countryCapital!: string;
  @Input() countryRegion!: string;
  @Input() countryLatitude!: number;
  @Input() countryLongitude!: number;

  constructor() { }

  ngOnInit(): void { }


}
