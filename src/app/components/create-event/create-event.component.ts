import { Component, OnInit } from '@angular/core';
import {EventsService} from "../../service/events.service";

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  rout! : string;
  categories = ['routine', 'repas', 'travail', 'loisir'];

  event = {
    id: '',
    title: '',
    time: '',
    type: '',
  };


  constructor(private eventsService: EventsService) { }

  createEvent() {
    this.eventsService
      .createEvent(this.event)
      .subscribe(ok => {
      })
  }


  ngOnInit(): void {
  }

}
