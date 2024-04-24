import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'td-editable-text',
  templateUrl: './editable-text.component.html',
  styleUrls: ['./editable-text.component.scss']
})
export class EditableTextComponent {
  isEditMode = false
  @Input() value: string = ''
  @Output() getNewValue = new EventEmitter<string>()

  startEditHandler() {
    this.isEditMode = true
  }

  disableEditHandler() {
    if (this.value.length > 0) {
      this.getNewValue.emit(this.value)
      this.isEditMode = false
    } else {
      alert('Min value is one character')
    }
  }
}
