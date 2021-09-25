import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common';

import { AppComponent } from './app.component';
import { ProjectPanelComponent } from './project-panel/project-panel.component';
import { ProjectSliderComponent } from './project-slider/project-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectPanelComponent,
    ProjectSliderComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
