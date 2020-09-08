import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { HomeRoutingModule } from '../home/home-routing';
import { HomeComponent } from './components/home/home.component';
import { ImageListComponent } from './components/image-list/image-list.component';
import { ImageItemComponent } from './components/image-list/image-item/image-item.component';
import { SelectImageComponent } from './components/select-image/select-image.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { SearchComponent } from './components/search/search.component';



@NgModule({
  declarations: [
    HomeComponent,
    ImageListComponent,
    ImageItemComponent,
    SelectImageComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    HomeRoutingModule,
        MatCarouselModule.forRoot(),
  ]
})
export class HomeModule { }
