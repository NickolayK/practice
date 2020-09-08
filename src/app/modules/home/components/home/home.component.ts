import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { Image } from 'src/app/models/image.model';
import { AuthService } from 'src/app/services/auth.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public images$: Observable<Image[]>;

constructor(
    private router: Router,
    private authenticationService: AuthService,
    private imageService: ImageService
) {}

  logout() {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
  }

  ngOnInit(): void {

    this.images$ = this.imageService.favoriteImageData;
  }

}
