import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { TvComponent } from './tv/tv.component';
import { PeopleComponent } from './people/people.component';
import { AboutComponent } from './about/about.component';
import { NetworksComponent } from './networks/networks.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeheaderComponent } from './homeheader/homeheader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetaisComponent } from './movie-detais/movie-detais.component';
import { TvDetaisComponent } from './tv-detais/tv-detais.component';
import { PeopledetailsComponent } from './peopledetails/peopledetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    TvComponent,
    PeopleComponent,
    AboutComponent,
    NetworksComponent,
    NotfoundComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    HomeheaderComponent,
    MovieDetaisComponent,
    TvDetaisComponent,
    PeopledetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
