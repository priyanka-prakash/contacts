import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngDatatableComponent } from './ang-datatable.component';

describe('AngDatatableComponent', () => {
  let component: AngDatatableComponent;
  let fixture: ComponentFixture<AngDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
