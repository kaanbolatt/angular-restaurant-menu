import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  constructor(@Inject('BaseURL') private BaseURL) { }
  ngOnInit() {

  }
}
