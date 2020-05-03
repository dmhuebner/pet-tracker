import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetProfileContainerComponent } from './containers/pet-profile-container/pet-profile-container.component';
import { PetProfileComponent } from './components/pet-profile/pet-profile.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { EditPetProfileComponent } from './components/edit-pet-profile/edit-pet-profile.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { PetProfileFormComponent } from './components/pet-profile-form/pet-profile-form.component';
import { MatInputModule } from '@angular/material/input';
import { BirthdayToAgePipe } from './pipes/birthday-to-age.pipe';
import { MatDatepickerModule } from '@angular/material/datepicker';



@NgModule({
    declarations: [
        PetProfileContainerComponent,
        PetProfileComponent,
        EditPetProfileComponent,
        PetProfileFormComponent,
        BirthdayToAgePipe
    ],
    exports: [
        PetProfileContainerComponent,
        PetProfileFormComponent
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        MatDatepickerModule,
    ]
})
export class PetModule { }
