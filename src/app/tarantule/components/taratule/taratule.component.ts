import { Component, OnInit } from '@angular/core';
import { GetAllTarantulasService } from '../../services/get-all-tarantulas.service';

@Component({
  selector: 'app-taratule',
  templateUrl: './taratule.component.html',
  styleUrls: ['./taratule.component.css']
})
export class TaratuleComponent implements OnInit {
  tarantule;
  constructor(private service: GetAllTarantulasService)
  {
    this.service.getAlltarantula().subscribe(
      Response => {
        this.tarantule = Response;
      },
      error => {
        alert('An error has occured. Please contact support team. Error: ' + error);
      }
    );
  }

  ngOnInit(): void {
  }

}
