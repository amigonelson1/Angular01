import { Injectable } from '@angular/core';
import { UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PermissionsGuard {
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.hasUser()) {
      return true;
    }
    else {
      alert('You don`t permissions')
      return false
    };
  }
  // simulamos user logueado
  hasUser(): boolean {
    return true;
  }

}
