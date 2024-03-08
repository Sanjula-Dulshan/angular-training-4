import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
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

  messageFromSibling: string = '';

  childMessage2: string = 'From child component 2!'; //View Child

  sendMessageToParent(value: string) {
    this.messageEvent.emit(value);
  }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(
      (message) => (this.messageFromSibling = message)
    );
  }
}
