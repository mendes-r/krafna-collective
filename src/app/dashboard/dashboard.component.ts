import { Component, OnInit } from '@angular/core';
import { Project } from '../entity/project';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  portfolio!: Project[];
  hoverProject: string = '';

  constructor(private _service: ProjectService) {}

  ngOnInit(): void {
    this.portfolio = this._service.getPortfolio();
  }

  /**
   * Sets hoverProject value.
   * The value is displayed during a hover event on the projects panels
   * @param name - project's name
   */
  setHoverProject(name: string) {
    this.hoverProject = name;
  }

}
