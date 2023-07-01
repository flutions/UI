import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceWorkComponent } from './service-work.component';

describe('ServiceWorkComponent', () => {
  let component: ServiceWorkComponent;
  let fixture: ComponentFixture<ServiceWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceWorkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
