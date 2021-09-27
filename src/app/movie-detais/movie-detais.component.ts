import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-detais',
  templateUrl: './movie-detais.component.html',
  styleUrls: ['./movie-detais.component.scss'],
})
export class MovieDetaisComponent implements OnInit {
  id: string = '';
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500/';
  movieId: any = {};
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _MoviesService: MoviesService
  ) {
    this.id = _ActivatedRoute.snapshot.params.id;
    _MoviesService.getMovieId(this.id).subscribe((response) => {
      this.movieId = response;
    });
  }

  ngOnInit(): void {}
}
