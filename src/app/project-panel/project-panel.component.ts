import {Component, Input, OnInit} from '@angular/core';
import {Project} from "../entity/project";

@Component({
  selector: 'app-project-panel',
  templateUrl: './project-panel.component.html',
  styleUrls: ['./project-panel.component.css']
})
export class ProjectPanelComponent {

  @Input() project!: Project;

  constructor() { }

}
