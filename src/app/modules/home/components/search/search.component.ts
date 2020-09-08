import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { ImageService } from 'src/app/services/image.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  public control: FormControl;
  public subScription: Subscription;
  public items: any[];
  constructor(private fb: FormBuilder, private imageService: ImageService) { }

  ngOnDestroy( ) {
    this.subScription.unsubscribe();
  }

  ngOnInit(): void {
    this.control = this.fb.control('', []);
    this.subScription = this.control.valueChanges.pipe (
      debounceTime(2000),
      distinctUntilChanged(),

      switchMap((term: string) => this.imageService.searchEntries(term)),
    ).subscribe((val: any[]) => {
      this.items = val;
    });
  }

}
