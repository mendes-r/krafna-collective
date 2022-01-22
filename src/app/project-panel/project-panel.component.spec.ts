import { Project } from './../entity/project';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPanelComponent } from './project-panel.component';

describe('ProjectPanelComponent', () => {
  let component: ProjectPanelComponent;
  let fixture: ComponentFixture<ProjectPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectPanelComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPanelComponent);
    component = fixture.componentInstance;
    component.project = getProject();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  function getProject(): Project {
    return {
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
    };
  }
});
