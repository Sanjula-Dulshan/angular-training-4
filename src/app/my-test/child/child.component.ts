import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  constructor(private dataService: DataService) {}

  @Input() message: string = '';
  @Output() messageEvent = new EventEmitter<string>();
  childMessage: string = '';
  messageFromSibling: string = '';
  counter: number = 1;

  childMessage2: string = 'From child component 2!'; //View Child

  sendMessageToParent() {
    this.childMessage = `Message from child ${this.counter}`;
    this.messageEvent.emit(this.childMessage);
    this.counter++;
  }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(
      (message) => (this.messageFromSibling = message)
    );
  }
}
