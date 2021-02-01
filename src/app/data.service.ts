import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Goal } from './models/goal.model';
import { Aboutme } from './models/aboutme.model';
import { Contact } from './models/contact.model';
import { Project } from './models/project.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  api_goals_url = 'http://localhost:3000/goals';
  api_contact_url = 'http://localhost:3000/contact';
  api_projects_url = 'http://localhost:3000/projects';
  api_aboutme_url = 'http://localhost:3000/about-me';

  constructor(private _http: HttpClient) { }
  getGoals() {
    return this._http.get<Goal[]>(this.api_goals_url);
  }
  getProjects() {
    return this._http.get<Project[]>(this.api_projects_url);
  }
  getAboutme() {
    return this._http.get<Aboutme[]>(this.api_aboutme_url);
  }
  getContact() {
    return this._http.get<Contact[]>(this.api_contact_url);
  }
  postContact(data: any){
    this._http.post(this.api_contact_url,data);
    console.warn(data);
  }
  clearContact(data: any){
    this._http.patch(this.api_contact_url, data);
  }
}
