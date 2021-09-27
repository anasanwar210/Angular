import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MoviesComponent } from './movies/movies.component';
import { TvComponent } from './tv/tv.component';
import { NetworksComponent } from './networks/networks.component';
import { PeopleComponent } from './people/people.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthGuard } from './auth.guard';
import { MovieDetaisComponent } from './movie-detais/movie-detais.component';
import { TvDetaisComponent } from './tv-detais/tv-detais.component';
import { PeopledetailsComponent } from './peopledetails/peopledetails.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", canActivate:[AuthGuard] ,  component: HomeComponent},
  { path: "about",canActivate:[AuthGuard] , component: AboutComponent},
  { path: "movies",canActivate:[AuthGuard] , component: MoviesComponent},
  { path: "tv",canActivate:[AuthGuard] , component: TvComponent},
  { path: "networks",canActivate:[AuthGuard] , component: NetworksComponent},
  { path: "people",canActivate:[AuthGuard] , component: PeopleComponent},
  { path: "moviedetails/:id",canActivate:[AuthGuard] , component: MovieDetaisComponent},
  { path: "tvdetails/:id",canActivate:[AuthGuard] , component: TvDetaisComponent},
  { path: "peopledetails/:id",canActivate:[AuthGuard] , component: PeopledetailsComponent},
  { path: "login", component: LoginComponent},
  { path: "register", component: RegisterComponent},
  { path: "**", component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
