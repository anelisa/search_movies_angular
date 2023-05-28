import { Component, Input } from '@angular/core';
import { Movies } from 'src/app/interfaces/movies';
import { MoviesResponse } from 'src/app/interfaces/movies-response';


@Component({
  selector: 'app-details-movie',
  templateUrl: './details-movie.component.html',
  styleUrls: ['./details-movie.component.scss']
})
export class DetailsMovieComponent {

  @Input()
  public detailsMovie?: MoviesResponse<Movies>;

  constructor(
  ){}

  ngOnInit(): void {
    console.log("jsdkfjfa", this.detailsMovie)
  }
}
