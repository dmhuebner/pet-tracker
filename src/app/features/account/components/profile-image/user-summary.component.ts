import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-summary',
  templateUrl: './user-summary.component.html',
  styleUrls: ['./user-summary.component.scss']
})
export class UserSummaryComponent implements OnInit {

  @Input() userImgUrl: string;
  @Input() userName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
