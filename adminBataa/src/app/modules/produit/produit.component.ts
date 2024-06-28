import { Component,OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProduitService } from 'src/Services/produit.service';
import { EnchereService } from 'src/Services/enchere.service';
import { Produit } from 'src/Modeles/Produit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  dateAujourdhui!: Date;
  constructor(private PS:ProduitService,private ES:EnchereService){
    this.dateAujourdhui = new Date();
  }
  datasource =new MatTableDataSource<Produit>();
  displayedColumns: string[] = ['id','nom', 'etat', 'prix','prix_Enchere','action'];
  maxPrixEnchere: number = 0;
  OnLoud:boolean=false;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngOnInit(): void {

    this.getProduit();
  }

  getProduit() {
    this.PS.getProduitValider().subscribe(data => {
      this.datasource.data = data;
      this.OnLoud=true;
    });
  }
  getMaxprixProduit(x:any) {
    this.ES.getMaxPrixEnchere(x).subscribe(data => {
      console.log(data);
      this.maxPrixEnchere = data;
    });
  }
  ngAfterViewInit() {
    this.datasource.paginator = this.paginator;
    this.datasource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.datasource.filter = filterValue.trim().toLowerCase();

    if (this.datasource.paginator) {
      this.datasource.paginator.firstPage();
    }
  }

}
