
import { Component } from '@angular/core';

@Component({
  selector: 'app-friends-list',
  imports: [],
  templateUrl: './friends-list.html',
  styleUrl: './friends-list.css'
})
export class FriendsList {
  friends = [
    { id: 1, name: 'Ahmed', status: 'En ligne' },
    { id: 2, name: 'Sarra', status: 'Hors ligne' },
    { id: 3, name: 'Youssef', status: 'En ligne' }
  ];
}
