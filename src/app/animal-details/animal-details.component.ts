import { Component, OnInit } from '@angular/core';
import { ANIMALS } from '../mock-animals';
import { Animal } from '../animal';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.css']
})
export class AnimalDetailsComponent implements OnInit {

  animal: Animal;

  constructor() {
  }

  ngOnInit() {
    this.animal = ANIMALS[2];
  }

}
