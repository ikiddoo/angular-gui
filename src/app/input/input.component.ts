import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() value: string = '';
  @Input() disabled: boolean = false;
  // Create a FormControl to handle the input value and validation
  inputValue: FormControl = new FormControl();
  constructor() {}
  ngOnInit(): void {
    this.inputValue = new FormControl(
      { value: this.value, disabled: this.disabled },
      [Validators.required]
    );
  }
}