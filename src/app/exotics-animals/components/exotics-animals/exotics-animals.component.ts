import { Component, OnInit } from '@angular/core';
import { Animal } from '../../models/animal';

@Component({
  selector: 'app-exotics-animals',
  templateUrl: './exotics-animals.component.html',
  styleUrls: ['./exotics-animals.component.css']
})
export class ExoticsAnimalsComponent implements OnInit {
  animal1 = 'Egzotične Životinje';
  animal: Animal = {
    id: 1,
    name: 'Gami'
  };
  constructor() { }
  ngOnInit(): void {
  }

}
