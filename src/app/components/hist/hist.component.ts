import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hist',
  templateUrl: './hist.component.html',
  styleUrls: ['./hist.component.scss']
})
export class HistComponent implements OnInit {

  @Input() data:any

  constructor() { }

  ngOnInit(): void {
  }

}
