import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { HomeRoutingModule } from '../home/home-routing';
import { HomeComponent } from './components/home/home.component';
import { ImageItemComponent } from './components/image-list/image-item/image-item.component';
import { ImageListComponent } from './components/image-list/image-list.component';
import { SearchComponent } from './components/search/search.component';
import { SelectImageComponent } from './components/select-image/select-image.component';


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
