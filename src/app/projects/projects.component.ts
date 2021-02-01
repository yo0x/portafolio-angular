import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects$: Project[]=[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    return this.dataService.getProjects()
    .subscribe(data => this.projects$ = data)
  }

}
