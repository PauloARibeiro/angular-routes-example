import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
})
export class ProjectDetailsComponent implements OnInit {
  project: Project;

  constructor(private route: ActivatedRoute, private service: ProjectService) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.project = this.service.getProject(params.id);
      console.log(this.project);
    });
  }
}
