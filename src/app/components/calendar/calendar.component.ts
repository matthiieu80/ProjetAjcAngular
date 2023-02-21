import {Component, OnInit} from '@angular/core';
import {EventsService} from "../../service/events.service";
import {event} from "../../modele/event";
import * as events from "events";
import {Router} from "@angular/router";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  events?: event[];
  champsAffiches: boolean = false

  constructor(private eventsService: EventsService, private router: Router) {
  }

  ngOnInit(): void {
    this.eventsService
      .fetchEvent()
      .subscribe(data => {
        this.events = data;
      });
  }

  suppEvent(id: number) {
    this.eventsService
      .suppEvent(id)
      .subscribe(ok => {
      })
    location.reload();
  }

  rediriger(id: number) {
    this.router.navigateByUrl(`http://localhost:4200/events/${id}`)

  }

  afficherChamps() {
    this.champsAffiches = true;
  }

  // appliquerLesModification(id: number) {
  //   this.champsAffiches = false
  //   this.miseAJourEvent(id, events)
  //     .subscribe(ok => {
  //     })
  // }

  miseAjourEvent(id: number) {
    this.champsAffiches = false
    this.eventsService
      .miseAJourEvent(id, events)
      .subscribe(ok => {
      })
  }


}
