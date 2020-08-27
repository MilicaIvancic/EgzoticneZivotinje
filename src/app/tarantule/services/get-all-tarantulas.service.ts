import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { paths } from '../../paths';

@Injectable({
  providedIn: 'root'
})
export class GetAllTarantulasService {

  constructor(private service: HttpClient) { }
  // tslint:disable-next-line:typedef
  getAlltarantula(){
    // tslint:disable-next-line:prefer-const
    let tarantule = this.service.get(paths.tarantule);
    return tarantule;
  }
}
