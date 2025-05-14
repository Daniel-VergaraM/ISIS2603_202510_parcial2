import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatosListComponent } from './candidatos-list/candidatos-list.component';
import { CandidatosDetailComponent } from './candidatos-detail/candidatos-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { CandidatosRoutes } from './candidatos.routing';



@NgModule({
  declarations: [
    CandidatosListComponent,
    CandidatosDetailComponent
  ],
  imports: [
    CommonModule,
    CandidatosRoutes,
    HttpClientModule
  ],
  exports: [
    CandidatosListComponent
  ]

})
export class CandidatosModule { }
