import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieOverviewComponent } from './movie-overview/movie-overview.component';

@NgModule({
  declarations: [MovieDetailsComponent, MovieOverviewComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MovieOverviewComponent
  ]
})
export class MoviesModule { }
