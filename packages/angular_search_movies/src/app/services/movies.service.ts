import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { MoviesResponse } from '../interfaces/movies-response';
import { Movies } from '../interfaces/movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }
  
  public getMovies(): Observable<MoviesResponse<Movies>>
   {
    const httpOptions: any = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NmE0NjBjODE5MTQ3NDlmYzBiYzQxMDg0NzFlM2EzOCIsInN1YiI6IjY0NmJhMDhlZDE4NTcyMDE4MDJkZjJlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z0hQ0W39TTNPSCXtERFah2-OmTJq6I9Q5JCdD96mnMc'
      })
    };

    return this.http.get<MoviesResponse<Movies>>(
      'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=80', httpOptions as Object
    )
  }

  

  public getMoviesById(movieId: number): Observable<MoviesResponse<Movies>> {

    const httpOptions: any = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NmE0NjBjODE5MTQ3NDlmYzBiYzQxMDg0NzFlM2EzOCIsInN1YiI6IjY0NmJhMDhlZDE4NTcyMDE4MDJkZjJlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z0hQ0W39TTNPSCXtERFah2-OmTJq6I9Q5JCdD96mnMc'
      })
    };

    return this.http.get<MoviesResponse<Movies>>(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${movieId}`, httpOptions as Object
    )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}

