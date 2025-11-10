import { Component } from '@angular/core';
import { NasaService } from '../services/nasa-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagina2',
  imports: [CommonModule],
  templateUrl: './pagina2.html',
  styleUrls: ['./pagina2.css']
})
export class Pagina2 {
  asteroidi: any[] = [];

  constructor(private nasa: NasaService) {}

  ngOnInit() {
    this.nasa.getNeoFeed().subscribe((risposta: any) => {
      const oggetti = risposta.near_earth_objects;
      for (const data in oggetti) {
        this.asteroidi.push(...oggetti[data]);
      }
    });
  }
}
