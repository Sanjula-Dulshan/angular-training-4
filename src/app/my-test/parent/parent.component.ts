import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements AfterViewInit {
  constructor() {}

  messageFromParent = 'Hello from parent component!';

  messageFromChild = '';

  receiveMessage($event: string) {
    this.messageFromChild = $event;
  }

  @ViewChild(ChildComponent)
  child!: ChildComponent;

  messageFromChild2 = '';

  ngAfterViewInit(): void {
    this.messageFromChild2 = this.child.childMessage2;
  }
}
