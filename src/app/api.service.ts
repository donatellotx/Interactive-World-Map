import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorldApiService {

  constructor(private http: HttpClient) { }

  getCountryInformation(countryId: string): Observable <any> {
    const apiUrl = `https://api.worldbank.org/v2/country/${countryId}?format=json`;
    return this.http.get(apiUrl);
  }

}
