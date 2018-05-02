import { Component, OnInit } from '@angular/core';
import { ANIMALS } from '../mock-animals';
import { Animal } from '../animal';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {
  animals = ANIMALS;

  constructor() { }

  onAnimalSelect(animal: Animal) {
    // Exercise: Insert Click-Action here
  }

  ngOnInit() {
  }

}
