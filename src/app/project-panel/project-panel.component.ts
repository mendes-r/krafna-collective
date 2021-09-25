import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-project-panel',
  templateUrl: './project-panel.component.html',
  styleUrls: ['./project-panel.component.css']
})
export class ProjectPanelComponent implements OnInit {

  @Input() name: string = 'Error';

  constructor() { }

  ngOnInit(): void {
  }

}
