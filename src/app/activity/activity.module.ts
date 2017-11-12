import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

// Components
import { ActivityComponent } from './activity.component';
import { ActivityInputComponent } from './input/input.component';
import { ActivityListComponent } from './list/list.component';

// Services
import { ActivityService } from './services/activity.service';
import { CommentService } from '../services/comment.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    ActivityComponent,
    ActivityInputComponent,
    ActivityListComponent
  ],
  providers: [
    ActivityService,
    CommentService
  ],
  exports: [
    ActivityComponent,
    ActivityInputComponent,
    ActivityListComponent
  ]
})
export class ActivityModule { }