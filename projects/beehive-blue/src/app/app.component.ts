import { Component, OnInit } from '@angular/core';
import { IMenu } from 'projects/lib-beehive-ui-shared/src/lib/features/menu/menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'beehive-blue';
  _menu:IMenu[];

  ngOnInit(): void {
    this._menu=[
      {path:"pages/beehive-red-happy", name:"Red-Happy"} as IMenu,
      {path:"pages/beehive-red-shock", name:"Red-shock"} as IMenu,
    ]
  }
}
