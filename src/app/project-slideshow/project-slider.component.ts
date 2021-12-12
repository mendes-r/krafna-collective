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
  slideIndexLeft: number = 0;
  slideIndexRight: number = 0;

  constructor(
    private route: ActivatedRoute,
    private _service: ProjectService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => (this.id = param.get('id') || ''));
    this.project = this._service.getProject(this.id);
  }

  ngAfterViewInit(): void {
    this.showSlidesLeft();
    this.showSlidesRight();
  }

  showSlidesLeft() {
    var slides = document.getElementsByClassName(
      'slide-left'
    ) as HTMLCollectionOf<HTMLElement>;

    this.slideIndexLeft++;

    if (this.slideIndexLeft >= slides.length) {
      this.slideIndexLeft = 0;
    }

    this.showSlides(slides, this.slideIndexLeft);
  }

  showSlidesRight() {
    var slides = document.getElementsByClassName(
      'slide-right'
    ) as HTMLCollectionOf<HTMLElement>;

    this.slideIndexRight++;

    if (this.slideIndexRight >= slides.length) {
      this.slideIndexRight = 0;
    }

    this.showSlides(slides, this.slideIndexRight);
  }

  private showSlides(slides: HTMLCollectionOf<HTMLElement>, index: number) {
    var i;
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slides[index].style.display = 'block';
  }
}
