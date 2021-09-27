import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-homeheader',
  templateUrl: './homeheader.component.html',
  styleUrls: ['./homeheader.component.scss'],
})
export class HomeheaderComponent {
  trendingMovies: any[] = [];
  trendingTvs: any[] = [];
  trendingPeople: any[] = [];
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500/';

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    margin: 8,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 8,
      },
    },
    nav: true,
  };

  constructor(private _MoviesService: MoviesService) {
    _MoviesService.getTrendingMovies('movie').subscribe((data) => {
      this.trendingMovies = data.results;
    });
  }
}
