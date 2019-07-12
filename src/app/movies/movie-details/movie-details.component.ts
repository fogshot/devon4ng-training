import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Movie} from '../movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {
  private _movie: Movie;
  @Output() movieUpdate = new EventEmitter<Movie>();
  @Output() movieCreate = new EventEmitter<Movie>();
  get movie(): Movie {
    return this._movie;
  }

  @Input() set movie(value: Movie) {
    this._movie = {...value};
  }

  apply(): void {
    this.movieUpdate.emit(this._movie);
  }

  create(): void {
    this.movieCreate.emit(this._movie);
  }
}
