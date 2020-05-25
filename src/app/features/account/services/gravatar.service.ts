import { Injectable } from '@angular/core';
import * as gravatarUrl from 'gravatar-url';

@Injectable({
  providedIn: 'root'
})
export class GravatarService {

  constructor() { }

  getGravatar(email: string) {
    return gravatarUrl(email, {size: 200});
  }
}
