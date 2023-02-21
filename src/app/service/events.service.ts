import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {event} from "../modele/event";
import * as http from "http";


@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor (private http: HttpClient){

  }

  fetchEvent(): Observable<event[]> {
    return this.http.get<event[]>('http://localhost:3000/events');
  }

  createEvent(createEvent: any): Observable<void> {
    return this.http.post<void>('http://localhost:3000/events', createEvent);
    location.reload()
  }

  suppEvent(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/events/${id}`);
    location.reload()
  }

  miseAJourEvent(id: number, eventData: any): Observable<void> {
    return this.http.patch<void>(`http://localhost:3000/events/${id}`, eventData);
  }
}
