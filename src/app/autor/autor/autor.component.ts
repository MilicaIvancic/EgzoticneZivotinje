import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {

  fulname;
  birthdate;
  colage;
  modul1;
  modul2;
  index;
  constructor() { }

  ngOnInit(): void {
    this.fulname = ' Milica Ivančić ';
    this.colage = ' Visoka ICT Škola ';
    this.modul1 = ' Mrežno i softversko inženjerstvo ';
    this.modul2 = ' Internet tehnologije ';
    this.birthdate = new Date(1998, 3, 5);
    this.index = '2001/19 ';
  }

}
