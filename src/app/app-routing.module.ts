import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutMeComponent} from './about-me/about-me.component';
import {ContactComponent} from './contact/contact.component';
import {HomeComponent} from './home/home.component';
import {MyGoalsComponent} from './my-goals/my-goals.component';
import {ProjectsComponent} from './projects/projects.component';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'about-me',component: AboutMeComponent},
  {path: 'contact',component: ContactComponent},
  {path: 'my-goals',component: MyGoalsComponent},
  {path: 'projects',component: ProjectsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
