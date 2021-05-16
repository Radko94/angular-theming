import { Component, OnInit } from '@angular/core';

import { IElement } from './interfaces/interfaces';
import { elements } from './data/data';
import { AppTheme } from './enums/themes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public elements: IElement[];
  public theme: string;

  constructor() {}

  public ngOnInit(): void {
    this.elements = elements;
  }

  public changeTheme(newTheme: string): void {
    switch (newTheme) {
      case AppTheme.Dark:
        this.theme = 'grey-dark-theme';
        break;
      default:
        this.theme = '';
        break;
    }
  }
}
