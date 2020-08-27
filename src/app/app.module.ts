import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ExoticsAnimalsComponent } from './exotics-animals/components/exotics-animals/exotics-animals.component';
import { HeaderComponent } from './layout/header/component/header/header.component';
import { MenuComponent } from './layout/menu/component/menu/menu.component';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './layout/footer/component/footer/footer.component';
import { GusterComponent } from './gusteri/component/guster/guster.component';
import { ZmijeComponent } from './zmije/components/zmije/zmije.component';
import { TaratuleComponent } from './tarantule/components/taratule/taratule.component';
import { GusterDetailsComponent } from './gusteri/component/guster-details/guster-details.component';
import { SnakeDetailsComponent } from './zmije/components/snake-details/snake-details.component';
import { TarantulaDetailsComponent } from './tarantule/components/tarantula-details/tarantula-details.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactUsComponent } from './contact/components/contact-us/contact-us.component';
import { AutorComponent } from './autor/autor/autor.component';

const appRoutes: Routes = [
  {
    path : '',
    component : ExoticsAnimalsComponent
  },
  {
    path : 'gusteri',
    component : GusterComponent
  },
  {
    path : 'gusteri/:id',
    component : GusterDetailsComponent
  },
  {
    path : 'zmije',
    component : ZmijeComponent
  },
  {
    path : 'zmije/:id',
    component : SnakeDetailsComponent
  },
  {
    path : 'tarantule',
    component : TaratuleComponent
  },
  {
    path : 'tarantule/:id',
    component : TarantulaDetailsComponent
  },
  {
    path : 'contact',
    component : ContactUsComponent
  },
  {
    path : 'autor',
    component : AutorComponent
  },
  {
    path : '**',
    redirectTo : ''
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ExoticsAnimalsComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    GusterComponent,
    ZmijeComponent,
    TaratuleComponent,
    GusterDetailsComponent,
    SnakeDetailsComponent,
    TarantulaDetailsComponent,
    ContactUsComponent,
    AutorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
