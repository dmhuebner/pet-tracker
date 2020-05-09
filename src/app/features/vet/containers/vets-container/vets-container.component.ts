import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Vet } from '../../interfaces/vet.interface';
import { VetsService } from '../../services/vets.service';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-vets-container',
  templateUrl: './vets-container.component.html',
  styleUrls: ['./vets-container.component.scss']
})
export class VetsContainerComponent implements OnInit, OnDestroy, OnChanges {

  @Input() userId: string;
  @Input() petId: string;

  vets: Vet[];
  unsubscribe$ = new Subject<true>();

  private allVets: Vet[];

  constructor(private vetsService: VetsService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.userId) {
      this.unsubscribe$.next(true);
      this.vetsService.getVets(this.userId).pipe(
          map((allVets) => {
            if (this.petId) {
              this.allVets = allVets;
              return allVets.filter(vet => vet.petIds.includes(this.petId));
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
    console.log('editedVet', editedVet);
    this.vetsService.updateVet(this.userId, editedVet, this.allVets);
  }

}
