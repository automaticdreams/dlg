import {Component, Input, OnInit} from '@angular/core';
import { DataService } from '../services/data.service';
import { Question } from '../models/question';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  questions: Question[];
  selectedQuestion: Question;
  constructor(private data: DataService) {
  }


  ngOnInit(): void {
    this.data.getQuestions()
      .subscribe((questions: any) => {
        this.questions = questions;
      });
  }
}
