import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeChallengeComponent } from './code-challenge.component';

describe('CodeChallengeComponent', () => {
  let component: CodeChallengeComponent;
  let fixture: ComponentFixture<CodeChallengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeChallengeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
