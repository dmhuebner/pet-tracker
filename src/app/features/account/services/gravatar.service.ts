import { Injectable } from '@angular/core';
import * as gravatarUrl from 'gravatar-url';

@Injectable({
  providedIn: 'root'
})
export class GravatarService {

  constructor() { }

  getGravatar(email: string) {
    const result = gravatarUrl(email, {size: 200});
    console.log('Grav URL', result);
    return result;
  }
}
