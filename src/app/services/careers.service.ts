import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { CAREERS } from "./data/careers";
import { Career } from "../models/Career";
@Injectable({
  providedIn: "root",
})
export class CareersService {
  private careers: Observable<Career[]>;
  constructor() {
    this.careers = of(CAREERS);
  }

  getCareers(): Observable<Career[]> {
    return this.careers;
  }

  getCareer(id: string): Observable<Career> {
    return this.getCareers().pipe(
      map((careers: Career[]) => careers.find((career) => career.id === id)!)
    );
  }
}
