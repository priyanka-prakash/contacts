import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CribListComponent } from './crib-list.component';

describe('CribListComponent', () => {
  let component: CribListComponent;
  let fixture: ComponentFixture<CribListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CribListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CribListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
