import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GetAllTarantulasService } from '../../services/get-all-tarantulas.service';

@Component({
  selector: 'app-tarantula-details',
  templateUrl: './tarantula-details.component.html',
  styleUrls: ['./tarantula-details.component.css']
})
export class TarantulaDetailsComponent implements OnInit {

  id;
  tarantule;
  tarantula;
  constructor(private service: GetAllTarantulasService, private http: HttpClient, private route: ActivatedRoute)
  {
    this.route.params.subscribe((params: Params) => {
      this.id = +this.route.snapshot.params.id;
    });
  }

  ngOnInit(): void {
    this.service.getAlltarantula().subscribe(
      Response => {
        this.tarantule = Response;
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.tarantule.length; i++){
          if (this.tarantule[i].id === this.id){
            this.tarantula = this.tarantule[i];
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

