import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ImageService } from 'src/app/services/image.service';
import { Image } from 'src/app/models/image.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-select-image',
  templateUrl: './select-image.component.html',
  styleUrls: ['./select-image.component.scss']
})
export class SelectImageComponent implements OnInit {

@Input() slides: any[];

constructor( private imageService: ImageService) {}

  ngOnInit(): void {}

  public checkImageStatus(slide: Image, matCarouselSlide) {
    const isVaforite = this.imageService.isOnVaforite(slide);
    matCarouselSlide.disabled = isVaforite;
    return isVaforite;
  }

  public onSlideClick(slide: Image, matCarouselSlide) {

    this.imageService.addToFavorite(slide);
    matCarouselSlide.disabled = !matCarouselSlide.disabled;

  }

  public onRemoveSlideClick(slide: Image, matCarouselSlide) {
    this.imageService.removeFromFavorite(slide);
    matCarouselSlide.disabled = !matCarouselSlide.disabled;

  }

}
