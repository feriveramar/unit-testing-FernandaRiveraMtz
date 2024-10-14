import { Component } from '@angular/core';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [],
  templateUrl: './media.component.html',
  styleUrl: './media.component.css'
})
export class MediaComponent {
  private media;
  constructor() {
    this.media = 0;
  }

  getMedia(datalist: string[], n: number): number {
    let arrData: number[] = new Array(n);
    for (let i = 0; i < n; i++) {
      arrData[i] = parseFloat(datalist[i]);
    }
    
    for (let j = 0; j < n; j++) {
      this.media += arrData[j];
    }
    
    this.media /= n;
    this.media = parseFloat(this.media.toFixed(2)); 

    return this.media;
  }
}





