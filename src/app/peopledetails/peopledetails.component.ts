import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-peopledetails',
  templateUrl: './peopledetails.component.html',
  styleUrls: ['./peopledetails.component.scss']
})
export class PeopledetailsComponent implements OnInit {
  id: string = '';
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500/';
  peopleId: any = {};
  constructor(private _ActivatedRoute:ActivatedRoute , private _MoviesService:MoviesService) {
    this.id = _ActivatedRoute.snapshot.params.id;
    _MoviesService.getPeopleId(this.id).subscribe((response)=>{
      this.peopleId = response
    })
  }

  ngOnInit(): void {
  }

}
