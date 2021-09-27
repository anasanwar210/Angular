import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private _HttpClient: HttpClient) {}

  getTrendingMovies(mediaType:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=5b2b2b6dddf920e316281b584f620563`)
  }

  getMovieId(id:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=5b2b2b6dddf920e316281b584f620563&language=en-US`)
  }

  getTvId(id:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${id}?api_key=5b2b2b6dddf920e316281b584f620563&language=en-US`)
  }

  getPeopleId(id:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/person/${id}?api_key=5b2b2b6dddf920e316281b584f620563&language=en-US`)
  }
}
