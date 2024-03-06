import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  constructor() {}

  @Input() message: string = '';
  @Output() messageEvent = new EventEmitter<string>();
  childMessage: string = 'From child component!';

  childMessage2: string = 'From child component 2!';

  sendMessageToParent() {
    this.messageEvent.emit(this.childMessage);
  }
}
