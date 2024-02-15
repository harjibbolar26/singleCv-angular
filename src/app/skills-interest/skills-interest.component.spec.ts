import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsInterestComponent } from './skills-interest.component';

describe('SkillsInterestComponent', () => {
  let component: SkillsInterestComponent;
  let fixture: ComponentFixture<SkillsInterestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsInterestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillsInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
