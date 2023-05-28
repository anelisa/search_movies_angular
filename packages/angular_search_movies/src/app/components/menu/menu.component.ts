import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GenreMovie } from 'src/app/interfaces/genre-movie';
import { GenresMoviesService } from 'src/app/services/genres-movies.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output()
  public genreSelected: EventEmitter<GenreMovie> = new EventEmitter();


  public gendersMovie?: GenreMovie[] = []; 

  constructor(
    public genreService: GenresMoviesService,
  ){}


  ngOnInit(): void {
    this.genreService.getGenres().subscribe(
      (resp: any) => {
        this.gendersMovie = resp.genres;
      }
    );
  }

  public selectedGenre(genre: GenreMovie): void {
    this.genreSelected.emit(genre);
  }
}
