import { Component, Input } from '@angular/core';
import { Location, NgClass } from '@angular/common';
import { ILinkModel } from './models/link.model';
import { Router, UrlTree } from '@angular/router';

@Component({
  selector: 'kles-material-header',
  templateUrl: './kles-material-header.component.html',
  styleUrls: ['./kles-material-header.component.scss']
})
export class KlesMaterialHeaderComponent {
  @Input() title?: string;
  @Input() navLinks?: ILinkModel[];
  @Input() close?: boolean;
  @Input() enableTitle?: boolean = true;
  @Input() align? = "start";
  @Input() color?;
  @Input() isStretch?: boolean = false;

  @Input() styles?: {
    header?: NgClass;
    toolbar?: NgClass;
    closeButton?: NgClass;
    title?: NgClass;
  }

  @Input() closeLink?: any[] | string | UrlTree | null | undefined;

  constructor(private location: Location, private router: Router) { }

  goBack() {
    if (this.closeLink) {
      if (Array.isArray(this.closeLink)) {
        this.router.navigate(this.closeLink);
      } else {
        this.router.navigateByUrl(this.closeLink);
      }
    } else {
      this.location.back();
    }

  }
}
