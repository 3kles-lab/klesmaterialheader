import { AfterViewInit, Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, AfterViewInit {
  links = [
    {
      path: '',
      active: true,
      label: 'test',
      visible: true
    }
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }
}
