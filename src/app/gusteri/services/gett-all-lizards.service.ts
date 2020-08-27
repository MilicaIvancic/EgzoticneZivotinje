import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { paths } from '../../paths';

@Injectable({
  providedIn: 'root'
})
export class GettAllLizardsService {

  constructor(private service: HttpClient) { }

  // tslint:disable-next-line:typedef
  getAllLizards(){
    // tslint:disable-next-line:prefer-const
    let lizards = this.service.get(paths.gusteri);
    return lizards;
  }
}
