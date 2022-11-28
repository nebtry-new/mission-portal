import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { LayoutsModule } from '../../layouts/layouts.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    HomeRoutingModule,
    LayoutsModule
  ]
})
export class HomeModule { }
