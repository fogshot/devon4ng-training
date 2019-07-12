import { Injectable } from '@angular/core';
import {Movie} from './movie';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies: Movie[] = [];
  private movieIdSequence = naturalSequence();

  constructor() {
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

  public findAll(): Observable<Movie[]> {
    return of(this.movies);
  }

  public save(movieToSave: Movie): Observable<Movie> {
    const movieToUpdate = this.movies.find(value => value.id === movieToSave.id);
    if (movieToUpdate === undefined) {
      movieToSave.id = this.movieIdSequence.next().value;
      this.movies.push(movieToSave);
      return of(movieToSave);
    } else {
      Object.assign(movieToUpdate, movieToSave);
      return of(movieToUpdate);
    }
  }

  public findOne(id: number): Observable<Movie> {
    return of(this.movies.find(value => value.id === id));
  }
}

// TODO find a place where this fits
function* naturalSequence() {
  let num = 1;
  while (true) {
    yield num;
    num = num + 1;
  }
}
