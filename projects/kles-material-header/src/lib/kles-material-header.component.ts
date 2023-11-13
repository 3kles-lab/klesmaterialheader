import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ILinkModel } from './models/link.model';

@Component({
  selector: 'kles-material-header',
  templateUrl: './kles-material-header.component.html',
  styleUrls: ['./kles-material-header.component.scss']
})
export class KlesMaterialHeaderComponent {
  @Input() title!: string;
  @Input() navLinks?: ILinkModel[];
  @Input() close?: boolean;
  @Input() enableTitle?: boolean = true;
  @Input() align?= "start";
  @Input() color?= "primary";
  @Input() isStretch?: boolean = false;

  constructor(private location: Location) { }

  goBack() {
    this.location.back();
  }
}
