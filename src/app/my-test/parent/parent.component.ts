import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  constructor() {}

  messageFromParent = 'Hello from parent component!';

  messageFromChild = '';

  receiveMessage($event: string) {
    this.messageFromChild = $event;
  }
}