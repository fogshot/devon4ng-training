import { Component, OnInit } from '@angular/core';
import { ANIMALS } from '../mock-animals';
import { Animal } from '../animal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {
  animals = ANIMALS;

  constructor(private router: Router) { }

  onAnimalSelect(animal: Animal) {
    // Exercise: Insert Click-Action here. Use router.navigate
    this.router.navigate(['/animal/' + animal.id]);
  }

  ngOnInit() {
  }

}
