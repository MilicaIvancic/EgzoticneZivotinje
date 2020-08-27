import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { paths } from '../../paths';

@Injectable({
  providedIn: 'root'
})
export class GetAllSnakesService {

  constructor(private service: HttpClient) { }
  // tslint:disable-next-line:typedef
  getAllSnakes(){
    // tslint:disable-next-line:prefer-const
    let zmije = this.service.get(paths.zmije);
    return zmije;
  }
}
