import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMedcinComponent } from './list-medcin.component';

describe('ListMedcinComponent', () => {
  let component: ListMedcinComponent;
  let fixture: ComponentFixture<ListMedcinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMedcinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMedcinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
