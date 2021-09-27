import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-tv-detais',
  templateUrl: './tv-detais.component.html',
  styleUrls: ['./tv-detais.component.scss'],
})
export class TvDetaisComponent implements OnInit {
  id: string = '';
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500/';
  tvId: any = {};

  constructor(
    private _MoviesService: MoviesService,
    private _ActivatedRoute: ActivatedRoute
  ) {
    this.id = _ActivatedRoute.snapshot.params.id;
    _MoviesService.getTvId(this.id).subscribe((response) => {
      this.tvId = response;
      // this.overview = this.tvId.overview.toString().split(" ").slice(0,40).join(' ');
    });
  }

  seeMore(){

  }

  ngOnInit(): void {}
}
