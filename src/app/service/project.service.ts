import { Injectable } from '@angular/core';
import { Project } from '../entity/project';
import projects from '../../assets/projects.json'

@Injectable({
  providedIn: 'root',
})
export class ProjectService {

  data: Project[] = projects;

  constructor() {
    this.shuffleProjects();
  }

  public getProject(id: string): Project {
    return this.data.filter(elemente => elemente.id === id)[0];
  }

  public getPortfolio(): Project[] {
    return this.data;
  }

  /**
   * Randomize array in-place using Durstenfeld shuffle algorithm.
   *
   * source: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
   */
   private shuffleProjects() {
    let dataSize: number = this.data.length;
    for (let i = dataSize - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = this.data[i];
      this.data[i] = this.data[j];
      this.data[j] = temp;
    }
  }
}
