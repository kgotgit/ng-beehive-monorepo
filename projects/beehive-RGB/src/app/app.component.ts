import { Component, OnInit } from '@angular/core';
import { IMenu } from 'projects/lib-beehive-ui-shared/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'beehive-RGB';


  _menu:IMenu[];

  ngOnInit(): void {
    this._menu=[
      {path:"pages/beehive-red-happy", name:"Red-Happy"} as IMenu,
      {path:"pages/beehive-red-angry", name:"Red-Angry"} as IMenu,
      {path:"pages/beehive-green-happy", name:"Green-Happy"} as IMenu,
      {path:"pages/beehive-green-cry", name:"Green-Happy"} as IMenu,
      {path:"pages/beehive-blue-happy", name:"Blue-Happy"} as IMenu,
      {path:"pages/beehive-blue-shock", name:"Blue-Shock"} as IMenu,
    ]
  }
}
