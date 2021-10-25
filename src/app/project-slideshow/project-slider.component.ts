import { Project } from './../entity/project';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-project-slider',
  templateUrl: './project-slider.component.html',
  styleUrls: ['./project-slider.component.css'],
})
export class ProjectSliderComponent implements OnInit {
  project!: Project;
  id: string = '';

  constructor(private route: ActivatedRoute, private _service: ProjectService) {}

  ngOnInit(): void {
    let temp: any;
    this.route.paramMap.subscribe((param) => temp=param.get('id'));
    this.id = temp || {};
    this.project = this._service.getProject(this.id);
  }
}
