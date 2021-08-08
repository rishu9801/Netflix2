import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MylistpageComponent } from './pages/mylistpage/mylistpage.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MoviepageComponent } from './pages/moviepage/moviepage.component';
import { RecentpageComponent } from './pages/recentpage/recentpage.component';
import { TvpageComponent } from './pages/tvpage/tvpage.component';

const routes: Routes = [
  { path: '',   redirectTo: '/homepage-component', pathMatch: 'full' },
  {path: 'homepage-component', component: HomepageComponent},
  {path: 'moviespage-component', component: MoviepageComponent},
  {path: 'tvpage-component', component: TvpageComponent},
  {path: 'recentpage-component', component: RecentpageComponent},
  {path: 'mylistpage-component', component: MylistpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
