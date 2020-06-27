import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormTitleComponent } from './form-title/form-title.component';

const routes: Routes = [{ path: '', component: FormTitleComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
