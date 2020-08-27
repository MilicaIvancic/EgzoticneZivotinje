import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GettAllLizardsService } from '../../services/gett-all-lizards.service';


@Component({
  selector: 'app-guster-details',
  templateUrl: './guster-details.component.html',
  styleUrls: ['./guster-details.component.css']
})
export class GusterDetailsComponent implements OnInit {
  id;
  gusteri;
  guster;
  constructor(private service: GettAllLizardsService, private http: HttpClient, private route: ActivatedRoute) {
    this.route.params.subscribe((params: Params) => {
      this.id = +this.route.snapshot.params.id;
    });
   }

  ngOnInit(): void {
    this.service.getAllLizards().subscribe(
      Response => {
        this.gusteri = Response;
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.gusteri.length; i++){
          if (this.gusteri[i].id === this.id){
            this.guster = this.gusteri[i];
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
