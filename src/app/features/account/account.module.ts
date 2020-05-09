import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountContainerComponent } from './containers/account-container/account-container.component';
import { UserSummaryComponent } from './components/profile-image/user-summary.component';
import { PetListComponent } from './components/pet-list/pet-list.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { VetModule } from '../vet/vet.module';


@NgModule({
    declarations: [
        AccountContainerComponent,
        UserSummaryComponent,
        PetListComponent
    ],
    exports: [],
    imports: [
        CommonModule,
        MatDividerModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatListModule,
        VetModule
    ]
})
export class AccountModule { }
