import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isDangger = false;
  isWanrning = false;

  user = [
    { id: 1, name: 'Nguyen', age: 30 },
    {
      id: 2,
      name: 'Nam',
      age: 30,
    },
    {
      id: 3,
      name: 'Hoa',
      age: 30,
    },
    {
      id: 4,
      name: 'Le',
      age: 30,
    },
  ];
}
