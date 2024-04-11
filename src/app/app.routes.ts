import { Routes } from '@angular/router';
import { HomeComponent, SucceedComponent } from './pages';
import { canActivateSucceed } from './utils';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'succeed',
    component: SucceedComponent,
    canActivate: [canActivateSucceed],
    // canDeactivate: [canDeactivateSuccess],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
