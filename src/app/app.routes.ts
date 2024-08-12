import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PotfolioComponent } from './potfolio/potfolio.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
{ path: '',redirectTo:"home", pathMatch:'full' ,title:"home page"},
{ path: 'home', component: HomeComponent  ,title:"home page" },
{ path: 'about', component: AboutComponent  ,title:"about page"},
{path:'contact',component:ContactComponent  ,title:"contact page"},
{path:'portfolio',component:PotfolioComponent  ,title:"portfolio page"},
{ path:"**",component:ErrorComponent,title:"error page"}
];
