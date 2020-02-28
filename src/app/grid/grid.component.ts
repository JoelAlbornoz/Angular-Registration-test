import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})

export class GridComponent implements OnInit {
  @Input() grid : any
  @Input() evento : any
  constructor() { }

  ngOnInit(): void {
  }

}
