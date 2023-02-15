import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewfeatureComponent } from './newfeature.component';

describe('NewfeatureComponent', () => {
  let component: NewfeatureComponent;
  let fixture: ComponentFixture<NewfeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewfeatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewfeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
