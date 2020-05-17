import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountContainerComponent } from './containers/account-container/account-container.component';
import { UserSummaryComponent } from './components/profile-image/user-summary.component';
import { PetListComponent } from './components/pet-list/pet-list.component';
import { MatCardModule } from '@angular/material/card';
import { VetModule } from '../vet/vet.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
    declarations: [
        AccountContainerComponent,
        UserSummaryComponent,
        PetListComponent
    ],
    exports: [],
    imports: [
        CommonModule,
        VetModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule
    ]
})
export class AccountModule { }
