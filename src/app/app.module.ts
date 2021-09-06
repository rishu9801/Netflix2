import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';

import { AppComponent } from './app.component';
import { SliderComponent } from './components/slider/slider.component';
import { NavComponent } from './components/nav/nav.component';
import { BannerComponent } from './components/banner/banner.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MoviepageComponent } from './pages/moviepage/moviepage.component';
import { TvpageComponent } from './pages/tvpage/tvpage.component';
import { RecentpageComponent } from './pages/recentpage/recentpage.component';
import { MylistpageComponent } from './pages/mylistpage/mylistpage.component';
import { FooterComponent } from './components/footer/footer.component';
import { DetailViewComponent } from './components/detail-view/detail-view.component';
import { SearchpageComponent } from './pages/searchpage/searchpage.component';
import { CardComponent } from './components/card/card.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

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
    CardComponent,
    LoginPageComponent,
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
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '915641446604-v9mcs2b4bejtcfsh3pd40cagiko4v6ci.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
