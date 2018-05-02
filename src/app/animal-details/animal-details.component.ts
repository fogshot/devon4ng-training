import { Component, OnInit } from '@angular/core';
import { ANIMALS } from '../mock-animals';
import { Animal } from '../animal';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.css']
})
export class AnimalDetailsComponent implements OnInit {

  animal: Animal;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        if (params.get('animalID') != null) {
          const id = +params.get('animalID');
          this.animal = ANIMALS[id];
        }
      });
  }

}
