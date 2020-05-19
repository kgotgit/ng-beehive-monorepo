import { Component, OnInit } from '@angular/core';
import { IMenu } from 'projects/lib-beehive-ui-shared/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'beehive-green';
  _menu:IMenu[];

  ngOnInit(): void {
    this._menu=[
      {path:"pages/beehive-green-happy", name:"Green-Happy"} as IMenu,
      {path:"pages/beehive-green-cry", name:"Green-Cry"} as IMenu,
    ]
  }
}
