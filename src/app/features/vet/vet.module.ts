import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VetsContainerComponent } from './containers/vets-container/vets-container.component';
import { VetInfoComponent } from './components/vet-info/vet-info.component';
import { VetsListComponent } from './components/vets-list/vets-list.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    VetsContainerComponent,
    VetInfoComponent,
    VetsListComponent
  ],
  exports: [
    VetsContainerComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class VetModule { }
