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
    // currently this component always shows the animal with ID=2.
    // replace this example code to show the animal with the ID defined within the URL-param.
    this.animal = ANIMALS[2];
  }

}
