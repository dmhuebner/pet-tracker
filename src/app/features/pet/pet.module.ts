import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetProfileContainerComponent } from './containers/pet-profile-container/pet-profile-container.component';
import { PetProfileComponent } from './components/pet-profile/pet-profile.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { EditPetProfileComponent } from './components/edit-pet-profile/edit-pet-profile.component';



@NgModule({
    declarations: [PetProfileContainerComponent, PetProfileComponent, EditPetProfileComponent],
    exports: [
        PetProfileContainerComponent
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
    ]
})
export class PetModule { }
