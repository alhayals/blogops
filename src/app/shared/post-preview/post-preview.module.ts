import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostPreviewComponent } from './post-preview.component';

@NgModule({
  declarations: [PostPreviewComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PostPreviewComponent
  ]
})
export class PostPreviewModule { }
