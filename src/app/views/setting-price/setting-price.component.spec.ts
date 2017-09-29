import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingPriceComponent } from './setting-price.component';

describe('SettingPriceComponent', () => {
  let component: SettingPriceComponent;
  let fixture: ComponentFixture<SettingPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
