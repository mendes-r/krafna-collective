import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  projects: string[] = [
    'project 01',
    'project 02',
    'project 03',
    'project 04',
    'project 05'
  ];
}
