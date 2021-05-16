import { Component, Input } from '@angular/core';

import { IElement } from '../../interfaces/interfaces';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss'],
})
export class ElementComponent {
  @Input() element: IElement;

  constructor() {}
}

