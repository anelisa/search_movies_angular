import { Component } from '@angular/core';
import { MoviesService } from './services/movies.service';
import { Movies } from './interfaces/movies';
import { GenreMovie } from './interfaces/genre-movie';
import { MoviesResponse } from './interfaces/movies-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(
    public movieService: MoviesService,
  ){}

  public moviesDetails?: MoviesResponse<Movies>

  public genreSelectId(movieGenreId: GenreMovie){
    this.movieService.getMoviesById(movieGenreId.id).subscribe(
      movieIdGenre => {
        this.moviesDetails = movieIdGenre
        console.log("this.moviesDetails", this.moviesDetails)
      }
    )
  }
}
