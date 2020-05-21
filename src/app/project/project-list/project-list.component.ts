import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit {
  projects$: Observable<Project[]>;

  constructor(private service: ProjectService) {}

  ngOnInit() {
    this.projects$ = this.service.getProjects();
  }
}
