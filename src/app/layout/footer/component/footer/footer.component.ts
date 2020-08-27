import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../../menu/service/menu.service';
import { Menu } from '../../../menu/menu';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  datum;
  public menu: Menu[];
  constructor(private services: MenuService) { }

  ngOnInit(): void {
    this.datum = new Date(2020, 7, 27);
    this.services.getAllMenues().subscribe(
      (Response: Menu[] ) => {
        this.menu = Response;
      },
      error => {
        alert('An error has occured. Please contact support team. Error: ' + error);
      }
    );
  }

}
