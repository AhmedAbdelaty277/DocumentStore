import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { DisplayComponent } from './components/display/display.component';
import { InsertComponent } from './components/insert/insert.component';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
  {
    path : '', component : DisplayComponent
  },
  {
    path : 'details/:id', component : DetailsComponent
  },
  {
    path : 'insert', component : InsertComponent
  },
  {
    path : 'update/:id', component : UpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
