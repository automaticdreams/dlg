import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionComponent } from './question.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('QuestionComponent', () => {
  let component: QuestionComponent;
  let fixture: ComponentFixture<QuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ BrowserAnimationsModule],
      declarations: [ QuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionComponent);
    component = fixture.componentInstance;
    component.data =  {
      "id": "1",
      "question": "What vehicles are covered?",
      "answer": "a."
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render the provided data', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Q1 What vehicles are covered?');
  });
  fit('should toggle', () => {
    const questionarea = fixture.debugElement.nativeElement.querySelector('.question');
    expect(component.hide).toBe('hidden')
    expect(component.rotate).toBe('standard')
    questionarea.click()
    expect(component.hide).toBe('open')
    expect(component.rotate).toBe('rotate')
    questionarea.click()
    expect(component.hide).toBe('hidden')
    expect(component.rotate).toBe('standard')
  });
});
