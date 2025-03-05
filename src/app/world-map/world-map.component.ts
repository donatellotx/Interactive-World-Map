


import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { CountryInfoComponent } from '../country-info/country-info.component';
import { WorldApiService } from '../api.service';






@Component({
  selector: 'app-world-map',
  imports: [],
  templateUrl: './world-map.component.html',
  styleUrl: './world-map.component.css'
})
export class WorldMapComponent {

  constructor(
    private endorse: ElementRef,
    private WorldApiService: WorldApiService
    ){}

  ngAfterViewInit(){
    const svgElement = this.endorse.nativeElement.querySelector('svg');
    const pathElements = svgElement.querySelectorAll('path');
    pathElements.forEach((path: SVGPathElement) => {

      path.addEventListener('click', this.handleClick.bind(this));
    });
  }


  @Output() svgIdChosen = new EventEmitter<string>();
  @Output() incomeChosen = new EventEmitter<string>();
  @Output() capitalChosen = new EventEmitter<string>();
  @Output() regionChosen = new EventEmitter<string>();
  @Output() latitudeChosen = new EventEmitter<number>();
  @Output() longitudeChosen = new EventEmitter<number>();
  @ViewChild(CountryInfoComponent)
  private countryInfoComponent!: CountryInfoComponent;

  handleClick(event: MouseEvent) {
    const path = event.target as SVGPathElement;
    const countryId = path.id;

    this.WorldApiService.getCountryInformation(countryId).subscribe((data: any) => {
      const countryName = data[1][0].name;
      const income = data[1][0].incomeLevel.value;
      const capitalCity = data[1][0].capitalCity;
      const region = data[1][0].region.value;
      const latitude = parseFloat(data[1][0].latitude);
      const longitude = parseFloat(data[1][0].longitude);

      this.svgIdChosen.emit(countryName);
      this.incomeChosen.emit(income);
      this.capitalChosen.emit(capitalCity);
      this.regionChosen.emit(region);
      this.latitudeChosen.emit(latitude);
      this.longitudeChosen.emit(longitude);

    });

  }


}
