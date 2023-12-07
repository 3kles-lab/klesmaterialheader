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
      label: 'test1',
      visible: true
    },
    {
      path: '',
      active: true,
      label: 'test2',
      visible: true
    },
    {
      path: '',
      active: true,
      label: 'test3',
      visible: true
    }
  ];
  isStretch = false;
  align = 'start';



  styles = {
    header: 'nav header',
    toolbar:'nav',
    // closeButton?: '';
    title: 'title'
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }
}
