import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { paths } from '../../../../app/paths';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private service: HttpClient) { }
   // tslint:disable-next-line:typedef
   getAllMenues(){
    // tslint:disable-next-line:prefer-const
    let menu = this.service.get(paths.menu);
    return menu;
  }
}
