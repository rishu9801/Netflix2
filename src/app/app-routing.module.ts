import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MylistpageComponent } from './pages/mylistpage/mylistpage.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MoviepageComponent } from './pages/moviepage/moviepage.component';
import { RecentpageComponent } from './pages/recentpage/recentpage.component';
import { TvpageComponent } from './pages/tvpage/tvpage.component';
import { DetailViewComponent } from './components/detail-view/detail-view.component';
import { SearchpageComponent } from './pages/searchpage/searchpage.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthGuard } from './pages/login-page/auth.guard';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

const routes: Routes = [
  { path: '',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginPageComponent},
  {path:'signUp',component:SignUpComponent},
  {path: 'homepage',canActivate:[AuthGuard], component: HomepageComponent},
  {path: 'movies',canActivate:[AuthGuard], component: MoviepageComponent},
  {path: 'tvpage-component', component: TvpageComponent},
  {path: 'recentpage-component', component: RecentpageComponent},
  {path: 'mylistpage-component', component: MylistpageComponent},
  {path:'searchpage',component:SearchpageComponent},
  {path: `homepage/:id`,component:DetailViewComponent},
  {path: `movies/:id`,component:DetailViewComponent},
  {path: `tvpage-component/:id`,component:DetailViewComponent},
  {path: `searchpage/:id`,component:DetailViewComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
