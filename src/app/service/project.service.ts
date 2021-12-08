import { Injectable } from '@angular/core';
import { Project } from '../entity/project';
import projects from '../../assets/projects.json'

@Injectable({
  providedIn: 'root',
})
export class ProjectService {

  data: Project[] = projects;

  constructor() {}

  public getProject(id: string): Project {
    return this.data.filter(elemente => elemente.id === id)[0];
  }

  public getPortfolio(): Project[] {
    return this.data;
  }
}
