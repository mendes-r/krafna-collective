import { TestBed } from '@angular/core/testing';
import { Project } from '../entity/project';

import { ProjectService } from './project.service';

describe('ProjectService', () => {
  let service: ProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the right project', () => {
    // When
    let id: string = '02';
    service.data = getPortfolio();
    const result = service.getProject(id);

    // Then
    expect(result.id).toEqual(id);
  });

  it('should return no project', () => {
    // When
    let id: string = '99';
    service.data = getPortfolio();
    const result = service.getProject(id);

    // Then
    expect(result.id).toBe('');
  });

  function getPortfolio(): Project[] {
    return [
      {
        id: '01',
        name: 'Foo2',
        description: 'Bar, Fooland',
        thumbnail: 'fake.jpg',
        left_slides: [
          'fake-slide-left-1.jpg',
          'fake-slide-left-2.jpg',
          'fake-slide-left-3.jpg',
        ],
        right_slides: ['fake-slide-right-1.jpg', 'fake-slide-right-2.jpg'],
      },
      {
        id: '02',
        name: 'Foo2',
        description: 'Bar, Fooland',
        thumbnail: 'fake.jpg',
        left_slides: [
          'fake-slide-left-1.jpg',
          'fake-slide-left-2.jpg',
          'fake-slide-left-3.jpg',
        ],
        right_slides: ['fake-slide-right-1.jpg', 'fake-slide-right-2.jpg'],
      },
    ];
  }
});
