import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllDataComponent } from './list-all-data.component';

describe('ListAllDataComponent', () => {
  let component: ListAllDataComponent;
  let fixture: ComponentFixture<ListAllDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
