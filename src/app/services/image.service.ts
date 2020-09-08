import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Image } from '../models/image.model';
import { environment } from 'src/environments/environment';
import { map, tap } from 'rxjs/operators';
import { BehaviorSubject, of, Observable } from 'rxjs';
// import { environment } from '@environments/environment';
// import { User } from '@app/_models';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  queryUrl = '?query=';

  private _favoriteImageSubject: BehaviorSubject<Image[]> = new BehaviorSubject([]);
  

  public readonly favoriteImageData: Observable<Image[]> = this._favoriteImageSubject.asObservable();

  private favoriteImages: Image[] = [ ];

  constructor(private http: HttpClient) { }

  searchEntries(term: string): Observable<object> {

    if (term === '') {
        return of([]);
    }

    const url = `${environment.apiUrl}search/photos${this.queryUrl}${term}&client_id=bU2CFhcR8REEz2aOT2sYB22XNOUAouZwvwIeoUVL6eU`;
    console.log('=> url: ', url);
    return this.http.get(url).pipe(
      map((res: any) => {
        return res.results;
      })
    );
}



  addToFavorite(image: any) {
    const images = this._favoriteImageSubject.value;
    if (!images.some((img: any) => img.id === image.id)){
      images.push(image);
      this._favoriteImageSubject.next(images);
    }
  }

  isOnVaforite(image: any) {
    const images = this._favoriteImageSubject.value;

    return images.some((img: any) => img.id === image.id);
  }

  removeFromFavorite(image: Image){
    const images = this._favoriteImageSubject.value;
    const index = images.indexOf(image);
    if ( index !== -1) {
      images.splice( index , 1 );
      this._favoriteImageSubject.next(images);
    }
  }
}






