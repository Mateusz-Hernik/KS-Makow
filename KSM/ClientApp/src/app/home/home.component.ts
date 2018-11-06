import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Season } from '../../models/season';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public season: Season;
  private _http: HttpClient;
  private _baseUrl: string;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this._baseUrl = baseUrl;
    this._http = http;
  }

  public getSeason() {
    this._http.get<Season>(this._baseUrl + 'api/Seasons/GetSeason').subscribe(result => {
      this.season = result;
    }, error => console.error(error));
  }
}
