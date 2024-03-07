import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTestRoutingModule } from './my-test-routing.module';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { SiblingComponent } from './sibling/sibling.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [ChildComponent, ParentComponent, SiblingComponent],
  imports: [CommonModule, MyTestRoutingModule],
  providers: [DataService],
})
export class MyTestModule {}
