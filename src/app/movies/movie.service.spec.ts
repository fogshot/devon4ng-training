import { TestBed } from '@angular/core/testing';

import { MovieService } from './movie.service';

describe('MovieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieService = TestBed.get(MovieService);
    expect(service).toBeTruthy();
  });

  it('should find some movies', () =>{
    const sut: MovieService = TestBed.get(MovieService);
    sut.findAll().subscribe(result => {
      expect(result.length).toBeGreaterThan(0);
    });
  });
});
