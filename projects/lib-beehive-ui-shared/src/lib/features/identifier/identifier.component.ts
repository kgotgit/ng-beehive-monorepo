import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-identifier',
  templateUrl: './identifier.component.html',
  styleUrls: ['./identifier.component.scss']
})
export class IdentifierComponent implements OnInit {


  _componentName:string;
  _path:string;
  _module:string;
  _project:string;

  @Input()
  set componentName(name:string){
    this._componentName=name;
  }


  @Input()
  set path(path:string){
    this._path=path;
  }

  @Input()
  set module(module:string){
    this._module=module;
  }

  @Input()
  set project(name:string){
    this._project=name;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
