import { Component, OnInit, Input, ContentChild, HostBinding } from '@angular/core';
import { InputRefDirective } from '../common/input-ref.directive';

@Component({
  selector: 'techskills-md-input',
  templateUrl: './techskills-md-input.component.html',
  styleUrls: ['./techskills-md-input.component.scss']
})
export class TechskillsMdInputComponent implements OnInit {


  @Input()
  icon: string;

  @ContentChild(InputRefDirective, { static: false })
  input: InputRefDirective;

  constructor() { }

  ngOnInit() {
  }

  @HostBinding('class.input-focus')
  get isInputFocus() {
    return this.input ? this.input.focus : false;
  }

}
