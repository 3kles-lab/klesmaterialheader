import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlesMaterialHeaderComponent } from './kles-material-header.component';

describe('KlesHeaderComponent', () => {
  let component: KlesMaterialHeaderComponent;
  let fixture: ComponentFixture<KlesMaterialHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KlesMaterialHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KlesMaterialHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
