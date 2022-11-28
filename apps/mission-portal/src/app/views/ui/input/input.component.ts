import { ChangeDetectionStrategy, Component, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'web-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  @Input() type: 'text' = 'text';
  @Input() placeholder: string = '';
  @Input() label: string = '';
  
  formControl = new FormControl();
}
