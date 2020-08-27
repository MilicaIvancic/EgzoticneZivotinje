import { Component, OnInit } from '@angular/core';
import { GettAllLizardsService } from '../../services/gett-all-lizards.service';

@Component({
  selector: 'app-guster',
  templateUrl: './guster.component.html',
  styleUrls: ['./guster.component.css']
})
export class GusterComponent implements OnInit {

  gusteri;
  constructor(private service: GettAllLizardsService) {
    this.service.getAllLizards().subscribe(
      Response => {
        this.gusteri = Response;
      },
      error => {
        alert('An error has occured. Please contact support team. Error: ' + error);
      }
    );
  }

  ngOnInit(): void {
  }

}
