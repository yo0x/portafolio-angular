import { Component, OnInit } from '@angular/core';
import { Aboutme } from '../models/aboutme.model';
import { DataService } from '../data.service';


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  aboutmes$: Aboutme[]=[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    return this.dataService.getAboutme()
    .subscribe(data => this.aboutmes$ = data)
  }

}
