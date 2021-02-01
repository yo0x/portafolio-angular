import { Component, OnInit } from '@angular/core';
import { Goal } from '../models/goal.model';
import { DataService } from '../data.service';
@Component({
  selector: 'app-my-goals',
  templateUrl: './my-goals.component.html',
  styleUrls: ['./my-goals.component.css']
})
export class MyGoalsComponent implements OnInit {

  filterTerm: string = "";
  goals$: Goal[]=[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    return this.dataService.getGoals()
    .subscribe(data => this.goals$ = data)
  }

}
