import { Component, OnInit } from '@angular/core';
import { GetAllSnakesService } from '../../services/get-all-snakes.service';

@Component({
  selector: 'app-zmije',
  templateUrl: './zmije.component.html',
  styleUrls: ['./zmije.component.css']
})
export class ZmijeComponent implements OnInit {
  zmije;
  constructor(private service: GetAllSnakesService) {
    this.service.getAllSnakes().subscribe(
      Response => {
        this.zmije = Response;
      },
      error => {
        alert('An error has occured. Please contact support team. Error: ' + error);
      }
    );
  }

  ngOnInit(): void {
  }

}
