import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let router = inject(Router)
  let res = !!localStorage.getItem('isAuth')
  if (!res) {
    router.navigate(['/login'])
  }
  return res
};
