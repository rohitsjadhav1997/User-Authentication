import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';


export const expenseGuard: CanActivateFn=(route,state) => {
    
    const isUserLogedIn=localStorage.getItem('isUserLoggedIn');
    if(isUserLogedIn=="true"){
      return true;
    }else{
      const rout:Router=inject(Router);
      rout.navigate(['/login']);
      return false;
    }
};