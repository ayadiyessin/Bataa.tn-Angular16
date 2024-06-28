import { Component,OnInit, ViewChild } from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UtilisateurService } from 'src/Services/utilisateur.service';



@Component({
  selector: 'app-acheteur-confirme',
  templateUrl: './acheteur-confirme.component.html',
  styleUrls: ['./acheteur-confirme.component.css'],
})

export class AcheteurConfirmeComponent implements OnInit{
  constructor(private _liveAnnouncer: LiveAnnouncer,private UTS:UtilisateurService){}
  datasource =new MatTableDataSource(this.UTS.tab);
  displayedColumns: string[] = ['id','nom', 'prenom', 'ville', 'adresse','action'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  OnLoud:boolean=false;
  ngOnInit(): void {
    this.getUtilisateur();
  }

  getUtilisateur() {
    this.UTS.getAcheteurConfirmer().subscribe(data => {
      this.datasource.data = data;
      this.OnLoud=true;
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
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}
