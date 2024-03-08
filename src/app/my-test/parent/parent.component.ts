import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements AfterViewInit, OnInit {
  constructor(private dataService: DataService) {}

  messageFromParent: string = '';
  messageFromChild: string = '';
  message: string = '';

  receiveMessage($event: string) {
    this.messageFromChild = $event;
  }

  @ViewChild(ChildComponent)
  child!: ChildComponent;

  messageFromChild2 = '';

  ngAfterViewInit(): void {
    this.messageFromChild2 = this.child.childMessage2;
  }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(
      (message) => (this.message = message)
    );
  }
}
