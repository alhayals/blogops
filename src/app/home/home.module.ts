import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { PostPreviewModule } from '../shared/post-preview/post-preview.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    PostPreviewModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
