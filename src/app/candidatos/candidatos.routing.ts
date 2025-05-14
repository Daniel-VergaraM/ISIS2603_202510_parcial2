import { Routes, RouterModule } from '@angular/router';
import { CandidatosListComponent } from './candidatos-list/candidatos-list.component';
import { CandidatosDetailComponent } from './candidatos-detail/candidatos-detail.component';

const routes: Routes = [
  {
    path: 'list',
    component: CandidatosListComponent,
  },
  {
    path: ':id',
    component: CandidatosDetailComponent
  },
];

export const CandidatosRoutes = RouterModule.forChild(routes);
