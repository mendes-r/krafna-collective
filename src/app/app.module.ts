import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { ProjectPanelComponent } from './project-panel/project-panel.component';
import { ProjectSliderComponent } from './project-slideshow/project-slider.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './frame-links/contact/contact.component';
import { ClientComponent } from './frame-links/client/client.component';
import { NewsComponent } from './frame-links/news/news.component';
import { ProjectService } from './service/project.service';

@NgModule({
  declarations: [
    AppComponent,
    ProjectPanelComponent,
    ProjectSliderComponent,
    DashboardComponent,
    ContactComponent,
    ClientComponent,
    NewsComponent,
  ],
  imports: [BrowserModule, CommonModule, AppRoutingModule],
  providers: [ProjectService],
  bootstrap: [AppComponent],
})
export class AppModule {}
