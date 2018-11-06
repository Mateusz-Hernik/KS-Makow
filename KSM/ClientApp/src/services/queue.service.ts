import { Injectable, Inject } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Queue } from "../models/queue";
import { Observable } from "rxjs/Observable";

@Injectable()
export class QueueService {
  private headerOptions = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  public getQueues(): Observable<Queue[]> {
    return this.http.get<Queue[]>(this.baseUrl + 'api/Queues/GetAllQueues', { headers: this.headerOptions });
  }

  public getAllQueues() {
    return this.http.get<Queue[]>(this.baseUrl + 'api/Queues/GetAllQueues', { headers: this.headerOptions }).toPromise();
  }

  public getSeasonQueues(id: number): Observable<Queue[]> {
    const url = `${this.baseUrl}api/Queues/GetSeasonQueues/${id}`;

    return this.http.get<Queue[]>(url, { headers: this.headerOptions });
  }
}
