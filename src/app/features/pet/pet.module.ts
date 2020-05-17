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
import { MatDividerModule } from '@angular/material/divider';
import { MedicalInfoContainerComponent } from './containers/medical-info-container/medical-info-container.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AccountModule } from '../account/account.module';
import { NewPetContainerComponent } from './containers/new-pet-container/new-pet-container.component';
import { VetModule } from '../vet/vet.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { ShotsContainerComponent } from './containers/shots-container/shots-container.component';
import { ShotsListComponent } from './components/shots-list/shots-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { NewShotContainerComponent } from './containers/new-shot-container/new-shot-container.component';
import { ShotFormComponent } from './components/shot-form/shot-form.component';
import { MatSelectModule } from '@angular/material/select';
import { MedicationsContainerComponent } from './containers/medications-container/medications-container.component';
import { MedicationsListComponent } from './components/medications-list/medications-list.component';
import { MedicationsListItemComponent } from './components/medications-list-item/medications-list-item.component';
import { MatCheckboxModule } from '@angular/material/checkbox';



@NgModule({
    declarations: [
        PetProfileContainerComponent,
        PetProfileComponent,
        NewPetContainerComponent,
        EditPetProfileComponent,
        PetProfileFormComponent,
        BirthdayToAgePipe,
        MedicalInfoContainerComponent,
        ShotsContainerComponent,
        ShotsListComponent,
        NewShotContainerComponent,
        ShotFormComponent,
        MedicationsContainerComponent,
        MedicationsListComponent,
        MedicationsListItemComponent,
    ],
    exports: [
        PetProfileContainerComponent,
        PetProfileFormComponent,
        MedicalInfoContainerComponent,
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        MatDatepickerModule,
        MatDividerModule,
        MatIconModule,
        MatListModule,
        AccountModule,
        VetModule,
        MatExpansionModule,
        MatTableModule,
        MatSortModule,
        MatSelectModule,
        MatCheckboxModule
    ]
})
export class PetModule { }
