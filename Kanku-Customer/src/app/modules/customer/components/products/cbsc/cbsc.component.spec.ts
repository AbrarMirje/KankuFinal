import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbscComponent } from './cbsc.component';

describe('CbscComponent', () => {
  let component: CbscComponent;
  let fixture: ComponentFixture<CbscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CbscComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CbscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
