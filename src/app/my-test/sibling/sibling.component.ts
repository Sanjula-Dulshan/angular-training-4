import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.scss'],
})
export class SiblingComponent implements OnInit {
  message: string = '';
  counter: number = 1;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.currentMessage.subscribe(
      (message) => (this.message = message)
    );
  }

  newMessage() {
    this.dataService.changeMessage(`Hello from Sibling ${this.counter}`);
    this.counter++;
  }
}
