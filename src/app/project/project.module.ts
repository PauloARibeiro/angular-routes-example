import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';

import { MaterialModule } from '../material.module';

import { ProjectComponent } from './project/project.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectDetailsComponent,
    ProjectComponent,
  ],
  imports: [CommonModule, ProjectRoutingModule, MaterialModule],
  exports: [ProjectListComponent, ProjectDetailsComponent, ProjectComponent],
})
export class ProjectModule {}
