import { Project } from './../entity/project';
import { ProjectService } from './../service/project.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectSliderComponent } from './project-slider.component';

describe('ProjectSliderComponent', () => {
  let component: ProjectSliderComponent;
  let fixture: ComponentFixture<ProjectSliderComponent>;
  let mockService;

  beforeEach(async () => {
    mockService = jasmine.createSpyObj(['getProject']);
    mockService.getProject.and.returnValue({
      id: '01',
      name: 'Foo',
      description: 'Bar, Fooland',
      thumbnail: 'fake.jpg',
      left_slides: [
        'fake-slide-left-1.jpg',
        'fake-slide-left-2.jpg',
        'fake-slide-left-3.jpg',
      ],
      right_slides: [
        'fake-slide-right-1.jpg',
        'fake-slide-right-2.jpg',
        'fake-slide-right-3.jpg',
        'fake-slide-right-4.jpg',
        'fake-slide-right-5.jpg',
      ],
    });
    await TestBed.configureTestingModule({
      declarations: [ProjectSliderComponent],
      imports: [RouterTestingModule],
      providers: [{ provide: ProjectService, useValue: mockService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a left slideshow with 3 slides', () => {
    // Then
    expect(component.slideLeftSize).toEqual(3);
  });

  it('should have a right slideshow with 5 slides', () => {
    // Then
    expect(component.slideRightSize).toEqual(5);
  });
});
