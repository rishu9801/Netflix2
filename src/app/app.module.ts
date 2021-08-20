import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SliderComponent } from './components/slider/slider.component';
import { NavComponent } from './components/nav/nav.component';
import {MatIconModule} from '@angular/material/icon';
import { BannerComponent } from './components/banner/banner.component';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MoviepageComponent } from './pages/moviepage/moviepage.component';
import { TvpageComponent } from './pages/tvpage/tvpage.component';
import { RecentpageComponent } from './pages/recentpage/recentpage.component';
import { MylistpageComponent } from './pages/mylistpage/mylistpage.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { DetailViewComponent } from './components/detail-view/detail-view.component';
import { SearchpageComponent } from './pages/searchpage/searchpage.component'
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    NavComponent,
    BannerComponent,
    SidebarComponent,
    HomepageComponent,
    MoviepageComponent,
    TvpageComponent,
    RecentpageComponent,
    MylistpageComponent,
    FooterComponent,
    DetailViewComponent,
    SearchpageComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SlickCarouselModule,
    MatIconModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
