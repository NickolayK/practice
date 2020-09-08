import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

import { Observable } from 'rxjs';
import { ImageService } from 'src/app/services/image.service';
import { Image } from 'src/app/models/image.model';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {

  public images$: Observable<Image[]>;
  constructor(private imageService: ImageService, private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {

    this.images$ = this.imageService.favoriteImageData;
  }


  onSetAsBackGround(image): void {

    this.renderer.setStyle(this.el.nativeElement.children[0], 'backgroundImage', `url(${ image.urls.small })`);
  }

}
