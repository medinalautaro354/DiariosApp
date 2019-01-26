import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SafePipePage } from './safe-pipe';

@NgModule({
  declarations: [
    SafePipePage,
  ],
  imports: [
    IonicPageModule.forChild(SafePipePage),
  ],
})
export class SafePipePageModule {}
