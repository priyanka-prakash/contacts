import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactfullDetailComponent } from './contactfull-detail.component';

describe('ContactfullDetailComponent', () => {
  let component: ContactfullDetailComponent;
  let fixture: ComponentFixture<ContactfullDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactfullDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactfullDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
