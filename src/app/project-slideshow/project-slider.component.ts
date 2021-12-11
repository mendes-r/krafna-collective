import { Project } from './../entity/project';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-project-slider',
  templateUrl: './project-slider.component.html',
  styleUrls: ['./project-slider.component.css'],
})
export class ProjectSliderComponent implements OnInit, AfterViewInit {
  project!: Project;
  id: string = '';
  slideIndex: number = 0;

  constructor(
    private route: ActivatedRoute,
    private _service: ProjectService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => (this.id = param.get('id') || ''));
    this.project = this._service.getProject(this.id);
  }

  ngAfterViewInit(): void {
    this.showSlides();
    console.log("FOO")
  }

  showSlides() {
    var i;
    var slides = document.getElementsByClassName(
      'slide-left'
    ) as HTMLCollectionOf<HTMLElement>;

    if (this.slideIndex >= slides.length) {
      this.slideIndex = 0;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    slides[this.slideIndex].style.display = 'block';
    this.slideIndex++;
  }
}
