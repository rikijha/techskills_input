import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TechskillsFaInputComponent } from "./techskills-fa-input/techskills-fa-input.component";
import { InputRefDirective } from "./common/input-ref.directive";
import { TechskillsMdInputComponent } from './techskills-md-input/techskills-md-input.component';


@NgModule({
    declarations:[TechskillsFaInputComponent,InputRefDirective, TechskillsMdInputComponent],
    imports:[
        CommonModule
    ],
    exports:[TechskillsFaInputComponent,InputRefDirective,TechskillsMdInputComponent]
})
export class TechskillsInpuModule{}