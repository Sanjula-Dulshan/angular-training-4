import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTestRoutingModule } from './my-test-routing.module';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { SiblingComponent } from './sibling/sibling.component';
import { DataService } from './data.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ChildComponent, ParentComponent, SiblingComponent],
  imports: [CommonModule, MyTestRoutingModule, FormsModule],
  providers: [DataService],
})
export class MyTestModule {}
