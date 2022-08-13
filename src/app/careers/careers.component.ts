import { Component, OnInit } from '@angular/core';
import { Career } from 'src/app/models/Career';
import { CareersService } from 'src/app/services/careers.service';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss'],
})
export class CareersComponent implements OnInit {
  careers: Career[] = [];

  constructor(private careersService: CareersService) {}

  ngOnInit(): void {
    this.careersService.getCareers().subscribe((careers) => {
      this.careers = careers;
    });
  }
}
