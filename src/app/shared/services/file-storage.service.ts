import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { switchMap, takeLast, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileStorageService {

  constructor(private storage: AngularFireStorage) { }

  uploadFile(folderName: string, id: string, file: File): Observable<string> {
    const now = Date.now();
    const filePath = `/${folderName}/${id}/${now}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    return task.snapshotChanges().pipe(
        takeLast(1),
        switchMap(() => fileRef.getDownloadURL())
    );
  }
}
