import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreightListComponent } from './freight-list.component';

describe('FreightListComponent', () => {
  let component: FreightListComponent;
  let fixture: ComponentFixture<FreightListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreightListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreightListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
