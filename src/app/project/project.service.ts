import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { PROJECTS } from './project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor() {}

  getProjects() {
    return of(PROJECTS);
  }

  getProject(id: number) {
    return PROJECTS.find((project) => project.id === +id);
  }
}
