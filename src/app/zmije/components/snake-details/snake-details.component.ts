import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GetAllSnakesService } from '../../services/get-all-snakes.service';

@Component({
  selector: 'app-snake-details',
  templateUrl: './snake-details.component.html',
  styleUrls: ['./snake-details.component.css']
})
export class SnakeDetailsComponent implements OnInit {
  id;
  zmija;
  zmije;
  constructor(private service: GetAllSnakesService, private http: HttpClient, private route: ActivatedRoute) {
    this.route.params.subscribe((params: Params) => {
      this.id = +this.route.snapshot.params.id;
    });
   }

  ngOnInit(): void {
    this.service.getAllSnakes().subscribe(
      Response => {
        this.zmije = Response;
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.zmije.length; i++){
          if (this.zmije[i].id === this.id){
            this.zmija = this.zmije[i];
            break;
          }
        }
      },
      error => {
        alert('An error has occured. Please contact support team. Error: ' + error);
      }
    );
  }

}
