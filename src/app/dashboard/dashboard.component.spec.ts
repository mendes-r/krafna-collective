import { Project } from './../entity/project';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DashboardComponent } from './dashboard.component';

describe('AppDashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render three projects', () => {
    // Given
    component.portfolio = getPortfolio();
    fixture.detectChanges();

    // When
    const projects = fixture.debugElement.queryAll(By.css('app-project-panel'))

    // Then
    expect(projects.length).toEqual(3)
  })

  it('should change value for the variable hoverProjects', () => {
    // Given
    const newHoverProject: string = "Bar";
    component.hoverProject = "Foo";

    // When
    component.setHoverProject(newHoverProject)

    // Then
    expect(component.hoverProject).toEqual(newHoverProject);
  })

  function getPortfolio(): Project[]{
    return [
      {
        "id": "01",
        "name": "casa-cha",
        "description": "Casa Chã, Oliveira de Azeméis",
        "thumbnail": "assets/images/01-casa-cha/krafna-architects-cha.jpg",
        "left_slides": [
          "assets/images/01-casa-cha/slideshow/left/krafna_cha_01.jpg",
          "assets/images/01-casa-cha/slideshow/left/krafna_cha_00.jpg"
        ],
        "right_slides": [
          "assets/images/01-casa-cha/slideshow/right/krafna_cha_02.jpg"
        ]
      },
      {
        "id": "02",
        "name": "belmonte",
        "description": "Belmonte, Porto",
        "thumbnail": "assets/images/02-belmonte/krafna-architects-belmonte.jpg",
        "left_slides": [
          "assets/images/02-belmonte/slideshow/left/krafna_belmonte_01.jpg"
        ],
        "right_slides": [
          "assets/images/02-belmonte/slideshow/right/krafna_belmonte_plt.png"
        ]
      },
      {
        "id": "03",
        "name": "botschaft",
        "description": "Botshaft, Berlin",
        "thumbnail": "assets/images/03-botschaft/krafna-architects-botschaft.jpg",
        "left_slides": [
          "assets/images/03-botschaft/slideshow/left/krafna_botschaft_01.jpg"
        ],
        "right_slides": [
          "assets/images/03-botschaft/slideshow/right/krafna_botschaft_02.jpg"
        ]
      },
    ]
  }
});
