import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

export const AuthGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const url = router.routerState.snapshot.url;

  if (authService.token) {
    return true;
  }

  authService.redirectUrl = url;

  router.navigate(['/login']);

  return false;
};
