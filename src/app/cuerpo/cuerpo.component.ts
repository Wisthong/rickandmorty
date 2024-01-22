import { Component, inject } from '@angular/core';
import { Result } from '../interface/rickmorty.interface';
import { RickmortyService } from '../service/rickmorty.service';
import { RouterOutlet } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cuerpo',
  standalone: true,
  imports: [RouterOutlet, DecimalPipe],
  templateUrl: './cuerpo.component.html',
  styleUrl: './cuerpo.component.css',
})
export class CuerpoComponent {
  btnNext: string | undefined | null;
  btnPrev!: string | undefined | null;
  listRickMorty: Result[] = [];
  params = {} as any;
  cantidadPersonajes: number = 0;
  private readonly rickmortySvc = inject(RickmortyService);
  private readonly toastrSvc = inject(ToastrService);
  ngOnInit(): void {
    this.params.page = 0;
    this.rickmortySvc.charactersMorty().subscribe(({ info, results }) => {
      this.toastrSvc.success('rickandmorty', 'Consumo rest');
      this.btnNext = info.next;
      this.btnPrev = info.prev;
      this.cantidadPersonajes = info.count;
      this.listRickMorty = results;
    });
  }

  botonAnterior() {
    this.rickmortySvc
      .charactersNext(this.btnPrev!)
      .subscribe(({ info, results }) => {
        this.btnNext = info.next;
        this.btnPrev = info.prev;
        this.listRickMorty = results;
        console.log(info);
      });
  }
  botonSiguiente() {
    this.rickmortySvc
      .charactersNext(this.btnNext!)
      .subscribe(({ info, results }) => {
        this.btnNext = info.next;
        this.btnPrev = info.prev;
        this.listRickMorty = results;
      });
  }
}
