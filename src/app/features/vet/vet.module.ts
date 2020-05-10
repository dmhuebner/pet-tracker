import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VetsContainerComponent } from './containers/vets-container/vets-container.component';
import { VetInfoComponent } from './components/vet-info/vet-info.component';
import { VetsListComponent } from './components/vets-list/vets-list.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { VetFormComponent } from './components/vet-form/vet-form.component';
import { VetListItemComponent } from './components/vet-list-item/vet-list-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NewVetComponent } from './components/new-vet/new-vet.component';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';



@NgModule({
  declarations: [
    VetsContainerComponent,
    VetInfoComponent,
    VetsListComponent,
    VetFormComponent,
    VetListItemComponent,
    NewVetComponent
  ],
  exports: [
    VetsContainerComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatChipsModule
  ]
})
export class VetModule { }
