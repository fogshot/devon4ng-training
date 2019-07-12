import {Component, OnInit} from '@angular/core';
import {Movie} from '../movie';
import {MovieService} from '../movie.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-movie-overview',
  templateUrl: './movie-overview.component.html',
  styleUrls: ['./movie-overview.component.scss']
})
export class MovieOverviewComponent implements OnInit {

  movies$: Observable<Movie[]>;
  selectedMovie: Movie;

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.movies$ = this.movieService.findAll();
  }

  selectMovie(movie: Movie): void {
    this.selectedMovie = movie;
  }

  isMovieSelected(movie: Movie): boolean {
    return movie === this.selectedMovie;
  }

  onMovieUpdated(updatedMovie: Movie): void {
    const movieObservable = this.movieService.save(updatedMovie);
    movieObservable.subscribe(() => this.movieService.findAll());
  }

  onCreateMovie(): void {
    this.selectedMovie = {id: null, title: null, directors: null, year: null, description: null};
  }
}
