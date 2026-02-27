import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';

import { DropdownUfComponent } from './dropdown-uf.component';

describe('DropdownUfComponent', () => {
  let component: DropdownUfComponent;
  let fixture: ComponentFixture<DropdownUfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DropdownUfComponent],
      providers: [provideZonelessChangeDetection()]
    });
    fixture = TestBed.createComponent(DropdownUfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
