import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Vet } from '../../interfaces/vet.interface';
import { VetsService } from '../../services/vets.service';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { PetRef } from '../../../account/interfaces/pet-ref.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vets-container',
  templateUrl: './vets-container.component.html',
  styleUrls: ['./vets-container.component.scss']
})
export class VetsContainerComponent implements OnInit, OnDestroy, OnChanges {

  @Input() userId: string;
  @Input() petId: string;
  @Input() petList: PetRef[];
  @Input() showPetList: boolean;

  @Output() newVetClicked = new EventEmitter<Vet[]>();

  vets: Vet[];
  unsubscribe$ = new Subject<true>();

  private allVets: Vet[];

  constructor(private vetsService: VetsService,
              private router: Router) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.userId) {
      this.unsubscribe$.next(true);
      this.vetsService.getVets(this.userId).pipe(
          map((allVets) => {
            this.allVets = allVets;
            if (this.petId) {
              return allVets.filter(vet => vet.petIds?.includes(this.petId));
            } else {
              return allVets;
            }
          }),
          takeUntil(this.unsubscribe$)
      ).subscribe(vets => {
        this.vets = vets;
      });
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
  }

  updateVet(editedVet: Vet) {
    this.vetsService.updateVet(this.userId, editedVet, this.allVets);
  }

  onNewVetClicked() {
    this.newVetClicked.emit(this.allVets);
  }

  onPetClicked(petName: string) {
    this.router.navigate(['profile', petName]);
  }

}
