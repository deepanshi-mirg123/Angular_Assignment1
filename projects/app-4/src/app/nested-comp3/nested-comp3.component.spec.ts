import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedComp3Component } from './nested-comp3.component';

describe('NestedComp3Component', () => {
  let component: NestedComp3Component;
  let fixture: ComponentFixture<NestedComp3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NestedComp3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NestedComp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
