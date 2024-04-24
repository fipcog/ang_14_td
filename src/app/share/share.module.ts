import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditableTextComponent } from './components/editable-text/editable-text.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EditableTextComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    EditableTextComponent
  ]
})
export class ShareModule { }
