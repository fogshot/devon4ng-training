import {Component, OnInit} from '@angular/core';
import {Movie} from '../movie';

function* naturalSequence() {
  let num = 1;
  while (true) {
    yield num;
    num = num + 1;
  }
}

@Component({
  selector: 'app-movie-overview',
  templateUrl: './movie-overview.component.html',
  styleUrls: ['./movie-overview.component.scss']
})
export class MovieOverviewComponent implements OnInit {

  movies: Movie[] = [];
  selectedMovie: Movie;
  private movieIdSequence = naturalSequence();

  constructor() {
  }

  ngOnInit() {
    this.movies.push({
      id: this.movieIdSequence.next().value, title: 'Pulp Fiction',
      description: 'Pulp Fiction is a 1994 American crime film that tells several stories of criminal Los Angeles.',
      directors: 'Quentin Tarantino',
      year: 1994
    }, {
      id: this.movieIdSequence.next().value,
      title: 'The Shawshank Redemption',
      description: 'An American film drama that tells the story of banker Andy Dufresne who ' +
        'is sentenced to life for the murder of his wife and her lover, despite his claims of innocence.',
      directors: 'Frank Darabont',
      year: 1994
    }, {
      id: this.movieIdSequence.next().value,
      title: 'The Godfather',
      description: 'An American crime film that chronicles a fictional New York crime family led by patriarch Vito Corleone.',
      directors: 'Francis Ford Coppola',
      year: 1972
    });
  }

  selectMovie(movie: Movie): void {
    this.selectedMovie = movie;
  }

  isMovieSelected(movie: Movie): boolean {
    return movie === this.selectedMovie;
  }

  onMovieUpdated(updatedMovie: Movie): void {
    const movieToUpdate = this.movies.find(value => value.id === updatedMovie.id);
    if (movieToUpdate === undefined) {
      updatedMovie.id = this.movieIdSequence.next().value;
      this.movies.push(updatedMovie);
    } else {
      Object.assign(movieToUpdate, updatedMovie);
    }
  }

  onCreateMovie(): void {
    this.selectedMovie = {id: null, title: null, directors: null, year: null, description: null};
  }
}
