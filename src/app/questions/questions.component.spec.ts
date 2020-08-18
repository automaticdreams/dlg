import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { QuestionsComponent } from './questions.component';
import { DataService } from '../services/data.service';
import {of} from 'rxjs';

const dataServiceStub = {
  getQuestions() {
    const questions = [
      {id: '1', question: 'question 1', answer: 'answer 1'},
      {id: '2', question: 'question2', answer: 'answer 2'}
    ];
    return of( questions );
  }
};


describe('QuestionsComponent', () => {
  let component: QuestionsComponent;
  let fixture: ComponentFixture<QuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule],
      declarations: [ QuestionsComponent ],
      providers: [ {provide: DataService, useValue: dataServiceStub} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('should select', () => {
  //   expect(component.isOpen).toBe(false, 'off at first');
  //   component.onSelect();
  //   expect(component.isOpen).toBe(true, 'on after click');
  //   component.onSelect();
  //   expect(component.isOpen).toBe(false, 'off after second click');
  // })

});
