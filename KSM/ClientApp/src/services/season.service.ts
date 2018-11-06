import { Injectable, Inject } from '@angular/core';
import { Season } from "../models/season";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Promise } from 'q';

@Injectable()
export class SeasonService {
  private headerOptions = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  public getSeasons(): Observable<Season[]> {
    return this.http.get<Season[]>(this.baseUrl + 'api/Seasons/GetAllSeasons', { headers: this.headerOptions });
  }

  public getAllSeasons() {
    return this.http.get<Season[]>(this.baseUrl + 'api/Seasons/GetAllSeasons', { headers: this.headerOptions }).toPromise();
  }

  public getSeason(id: number) {
    const url = `${this.baseUrl}api/Seasons/GetSeason/${id}`;

    return this.http.get<Season>(url, { headers: this.headerOptions }).toPromise();
  }

  public updateSeason(season: Season) {
    var body = JSON.stringify(season);
    const url = `${this.baseUrl}api/Seasons/UpdateSeason/${season.id}`;

    let promise = Promise((resolve, reject) => {
      this.http
        .post(url, body, {
          headers: this.headerOptions
        })
        .toPromise()
        .then(
          res => { //Sucess
            resolve(true);
          },
          msg => { //Error
            reject(false);
          }
        );
    });

    return promise;
  }

  public deleteSeason(id: number) {
    const url = `${this.baseUrl}api/Seasons/DeleteSeason/${id}`;

    let promise = Promise((resolve, reject) => {
      this.http
        .delete(url, {
          headers: this.headerOptions
        })
        .toPromise()
        .then(
          res => { //Sucess
            resolve(true);
          },
          msg => { //Error
            reject(false);
          }
        );
    });

    return promise;
  }

  public addSeason(season: Season) {
    var body = JSON.stringify(season);

    let promise = Promise((resolve, reject) => {
      this.http
        .post(this.baseUrl + 'api/Seasons/AddSeason', body, {
          headers: this.headerOptions
        })
        .toPromise()
        .then(
          res => { //Sucess
            resolve(true);
          },
          msg => { //Error
            reject(false);
          }
        );
    });

    return promise;
  }
}
