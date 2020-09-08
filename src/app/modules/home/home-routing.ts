
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../helpers/auth.guar';
import { ImageListComponent } from './components/image-list/image-list.component';
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
