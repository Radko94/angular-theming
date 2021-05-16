import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AppTheme } from 'src/app/enums/themes';

@Component({
  selector: 'app-heared',
  templateUrl: './heared.component.html',
  styleUrls: ['./heared.component.scss'],
})
export class HearedComponent implements OnInit {
  public themes: string[];

  @Output()
  public switchTheme: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.themes = Object.values(AppTheme);
  }
}
