import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RegisterComponent } from './register/register.component';
import { ProductListComponent } from './product-list/product-list.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule,MatButtonModule ],
  declarations: [ AppComponent, HelloComponent, RegisterComponent, ProductListComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
