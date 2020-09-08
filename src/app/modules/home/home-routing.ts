
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../helpers/auth.guar';
import { ImageListComponent } from './components/image-list/image-list.component';
import { HomeComponent } from './components/home/home.component';
import { SelectImageComponent } from './components/select-image/select-image.component';
import { SearchComponent } from './components/search/search.component';




const routes: Routes = [
    { path: '', redirectTo: 'search-images', pathMatch: 'full' },
    { path: 'favorites', component: ImageListComponent, canActivate: [AuthGuard] },
    { path: 'search-images', component: SearchComponent, canActivate: [AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class HomeRoutingModule {
}
