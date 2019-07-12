import {Component, OnInit} from '@angular/core';
import {Movie} from '../movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  currentMovie: Movie;

  constructor() {
  }

  ngOnInit() {
    this.currentMovie = {
      id: 1, title: 'Pulp Fiction',
      description: 'Pulp Fiction is a 1994 American crime film that tells several stories of criminal Los Angeles.',
      directors: 'Quentin Tarantino',
      year: 1994
    };
  }

}
