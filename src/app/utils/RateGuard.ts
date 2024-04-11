import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  CanDeactivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

interface RatingComponentProps {
  rating: number;
}

export const canActivateSucceed: CanActivateFn = () => {
  const injectedRouter = inject(Router);

  const rating =
    injectedRouter.getCurrentNavigation()?.extras.state?.['rating'];

  return rating !== undefined || injectedRouter.navigateByUrl('');
};

// NOTE: Active when user is trying to navigate to other page when in the current page marked by canDeactivate in routes file.
// export const canDeactivateSuccess: CanDeactivateFn<RatingComponentProps> = (
//   component: RatingComponentProps,
//   currentRoute: ActivatedRouteSnapshot,
//   currentState: RouterStateSnapshot,
//   nextState: RouterStateSnapshot
// ) => {
//   console.log('component', component);
//   console.log('current route', currentRoute);
//   console.log('current state', currentState);
//   console.log('next state', nextState);

//   return true;
// };
