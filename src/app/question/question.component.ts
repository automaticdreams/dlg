import {Component, Input, OnInit} from '@angular/core';
import {Question} from '../models/question';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  animations: [  trigger('expand', [
    state('hidden', style({
      height: '0px',
      opacity: 0,
    })),
    transition('* <=> *', animate('500ms')),
  ]),

    trigger('isExpanded', [
      state('rotate', style({
        transform: 'rotate(-45deg)'
      })),
      transition('* <=> *', animate('300ms')),
    ]),
  ]
})
export class QuestionComponent implements OnInit {
  @Input() data: Question;
   public hide: string;
  public rotate: string;

  constructor() {
     this.hide = 'hidden';
     this.rotate = 'standard';
  }
  toggle() {
     this.hide = this.hide === 'hidden' ? 'open' : 'hidden';
     this.rotate = this.rotate === 'standard' ? 'rotate' : 'standard';
  }
  ngOnInit(): void {
  }

}
