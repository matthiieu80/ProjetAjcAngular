import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalendarComponent} from "./components/calendar/calendar.component";
import {CreateEventComponent} from "./components/create-event/create-event.component";


const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'connexion'},
  { path: 'events', component: CalendarComponent },
  { path: 'events/add', component: CreateEventComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
