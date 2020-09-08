import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Image } from 'src/app/models/image.model';
import { ImageService } from 'src/app/services/image.service';


@Component({
  selector: 'app-image-item',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.scss']
})
export class ImageItemComponent implements OnInit {

  @Input() public image: any;
  @Output() public remove = new EventEmitter<any>();
  @Output() public setAsBackGround = new EventEmitter<any>();

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
  }

  public onSetAsBackground() {
    this.setAsBackGround.emit(this.image);
  }

  public onRemove() {
    this.imageService.removeFromFavorite(this.image);
  }

}
