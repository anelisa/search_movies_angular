import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GenreMovie } from '../interfaces/genre-movie';

@Injectable({
  providedIn: 'root'
})
export class GenresMoviesService {

  constructor(private http: HttpClient) { }

  public getGenres(): Observable<HttpEvent<GenreMovie>> {
    const httpOptions: any = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NmE0NjBjODE5MTQ3NDlmYzBiYzQxMDg0NzFlM2EzOCIsInN1YiI6IjY0NmJhMDhlZDE4NTcyMDE4MDJkZjJlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z0hQ0W39TTNPSCXtERFah2-OmTJq6I9Q5JCdD96mnMc'
      })
    };

    return this.http.get<GenreMovie>('https://api.themoviedb.org/3/genre/movie/list?language=en', httpOptions)
  }
}
