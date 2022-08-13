import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CAREERS } from './data/careers';
import { Career } from '../models/Career';
@Injectable({
  providedIn: 'root',
})
export class CareersService {
  constructor() {}

  getCareers(): Observable<Career[]> {
    const careers = of(CAREERS);
    return careers;
  }
}
