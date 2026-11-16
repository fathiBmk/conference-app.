
import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  imports: [],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css'
})
export class Notifications {

  notifications = [
    {
      id: 1,
      message: 'Ahmed vous a envoyé une invitation',
      date: 'Aujourd’hui'
    },
    {
      id: 2,
      message: 'Une nouvelle conférence est disponible',
      date: 'Hier'
    },
    {
      id: 3,
      message: 'Sarra a accepté votre invitation',
      date: 'Hier'
    }
  ];

  clearNotifications() {
    this.notifications = [];
  }

}
