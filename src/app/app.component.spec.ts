import { Router, RouterModule } from '@angular/router';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have all the frames`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const top = fixture.debugElement.queryAll(By.css('#frame-t'))
    const bottom = fixture.debugElement.queryAll(By.css('#frame-b'))
    const left = fixture.debugElement.queryAll(By.css('#frame-l'))
    const right = fixture.debugElement.queryAll(By.css('#frame-r'))
    expect(top).toBeTruthy;
    expect(bottom).toBeTruthy;
    expect(left).toBeTruthy;
    expect(right).toBeTruthy;
  });

  it(`should have a social networks hyperlinks`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const social = fixture.debugElement.queryAll(By.css('#social'))
    expect(social).toBeTruthy;
  });

  it(`should not have back to main page button`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const social = fixture.debugElement.queryAll(By.css('#back'))
    expect(social).toBeFalsy;
  });

});
