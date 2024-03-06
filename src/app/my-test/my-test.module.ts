import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTestRoutingModule } from './my-test-routing.module';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';

@NgModule({
  declarations: [ChildComponent, ParentComponent],
  imports: [CommonModule, MyTestRoutingModule],
})
export class MyTestModule {}
