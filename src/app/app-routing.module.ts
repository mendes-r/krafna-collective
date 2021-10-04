import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ProjectSliderComponent} from "./project-slideshow/project-slider.component";

const routes: Routes = [
  { path: '#id', component: ProjectSliderComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
