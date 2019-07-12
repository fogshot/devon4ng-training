import {Component, OnInit} from '@angular/core';
import {Movie} from "../movie";

@Component({
  selector: 'app-movie-overview',
  templateUrl: './movie-overview.component.html',
  styleUrls: ['./movie-overview.component.scss']
})
export class MovieOverviewComponent implements OnInit {

  movies: Movie[] = [];
  selectedMovie: Movie;

  constructor() {
  }

  ngOnInit() {
    this.movies.push({
      id: 1, title: 'Pulp Fiction',
      description: 'Pulp Fiction is a 1994 American crime film that tells several stories of criminal Los Angeles.',
      directors: 'Quentin Tarantino',
      year: 1994
    }, {
      id: 2,
      title: 'The Shawshank Redemption',
      description: 'An American film drama that tells the story of banker Andy Dufresne who ' +
        'is sentenced to life for the murder of his wife and her lover, despite his claims of innocence.',
      directors: 'Frank Darabont',
      year: 1994
    }, {
      id: 3,
      title: 'The Godfather',
      description: 'An American crime film that chronicles the fictional New York crime family Corleone under the patriarch Vito Corleone.',
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
}
