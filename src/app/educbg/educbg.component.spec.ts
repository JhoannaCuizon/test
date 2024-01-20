import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducbgComponent } from './educbg.component';

describe('EducbgComponent', () => {
  let component: EducbgComponent;
  let fixture: ComponentFixture<EducbgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EducbgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EducbgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
