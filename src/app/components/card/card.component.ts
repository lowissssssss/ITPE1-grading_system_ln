import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {


    @Input()name : string = "Subjects";
    @Input()count : number = 3;
    @Input()img : string = "";
    @Input()color : string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
