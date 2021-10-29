import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { PublicComponent } from './public.component';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { RouterModule } from '@angular/router';
import { PublicRoutingModule } from './public-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    PublicComponent,
    AllBooksComponent,
    BookDetailsComponent
  ],
  imports: [
    RouterModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
