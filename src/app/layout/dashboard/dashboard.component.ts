import { Component, OnInit } from '@angular/core';
import { cardData } from 'src/app/data/CardData';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cardData = cardData
  constructor() { }

  ngOnInit(): void {
  }

}
