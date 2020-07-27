import { Component, OnInit, Input, ContentChild,AfterContentInit, HostBinding } from '@angular/core';
import { InputRefDirective } from '../common/input-ref.directive';

@Component({
  selector: 'techskills-fa-input',
  templateUrl: './techskills-fa-input.component.html',
  styleUrls: ['./techskills-fa-input.component.scss']
})
export class TechskillsFaInputComponent implements OnInit,AfterContentInit {

  @Input() icon:string;
  

  @ContentChild(InputRefDirective,{static:true})
  input:InputRefDirective;

 
  constructor() { }
  ngAfterContentInit(): void {
    if(!this.input){
      console.error('the techskills-fa-input needs an input inside its content');
    }
  }

  ngOnInit() {
  }

  @HostBinding('class.input-focus')
  get isInputFocus(){
    return this.input ? this.input.focus : false;
  }

  get classes(){
    const cssClasses={};

    if(this.icon){
      cssClasses['fa-'+this.icon]=true;
    }

    return cssClasses;
  }

}
