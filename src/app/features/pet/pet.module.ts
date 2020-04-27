import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetProfileContainerComponent } from './containers/pet-profile-container/pet-profile-container.component';



@NgModule({
    declarations: [PetProfileContainerComponent],
    exports: [
        PetProfileContainerComponent
    ],
    imports: [
        CommonModule
    ]
})
export class PetModule { }
