import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../entity/project';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-panel',
  templateUrl: './project-panel.component.html',
  styleUrls: ['./project-panel.component.css'],
})
export class ProjectPanelComponent {
  @Input() project!: Project;
  @Output() emitName = new EventEmitter<string>();

  constructor() {}

  /**
   * Sends project name to parent component.
   * Connected to the project hover effect in the dashboard
   */
  sendName(): void {
    this.emitName.emit(this.project.name);
  }

  /**
   * Sends empty string to parent component.
   * This enables that when a mouse leaves the component, the parent doesn't show the hover effect
   */
  sendNothing(): void {
    this.emitName.emit("");
  }
}
