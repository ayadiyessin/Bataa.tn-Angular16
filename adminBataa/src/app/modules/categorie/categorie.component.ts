import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CategorieService } from 'src/Services/categorie.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import { CategorieFormComponent } from '../categorie-form/categorie-form.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Categorie } from 'src/Modeles/Categorie';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit{
  constructor(private _liveAnnouncer: LiveAnnouncer,private CS:CategorieService,private viewContainer: ViewContainerRef,private modalService: NgbModal) {}
  datasource =new MatTableDataSource<Categorie>();
  displayedColumns: string[] = ['id', 'nom','action'];
  errors: any = [];
  formError: any = {};
  idparcour:number =0;
  isFocused: boolean = false;// pour les errors de form
  CategorieForm = new FormGroup({
    nomcategorie: new FormControl('', [Validators.required]),
  });

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('closeModal') closeModal: ElementRef
  OnLoud:boolean=false;
  ngOnInit(): void {
    this.getCategorie();
  }

  getCategorie() {
    this.CS.OnGet().subscribe(data => {
      this.datasource.data = data;
      console.log(data);
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
  validForm() { // controle form
    this.errors = [];
    this.formError = {};
    let validFlag = true;
    if (!this.CategorieForm.value.nomcategorie) {
      this.errors.push('nom');
      this.formError.errorFornom = 'il faux remplire le nom  de la categorie';
      validFlag = false;
    }
    return validFlag;
  }
  // clearError() {
  //   // Cette méthode est appelée à chaque saisie dans l'input
  //   const index = this.errors.indexOf('nom');
  //   if (index > -1) {
  //     this.errors.splice(index, 1);
  //     this.formError.errorFornom = '';
  //   }
  // }
  onFocus() {
    this.isFocused = true;
  }

  onBlur() {
    this.isFocused = false;
    this.checkError();
  }

  clearError() {
    const index = this.errors.indexOf('nom');
    if (index > -1) {
      this.errors.splice(index, 1);
      this.formError.errorFornom = '';
    }
  }

  checkError() {
    if (!this.validForm() && !this.isFocused) {
      // Vérifie s'il y a des erreurs et si l'input n'est pas en focus
      this.errors.push('nom');
      this.formError.errorFornom = 'Il faut remplir le nom de la catégorie';
    }
  }
  closeModalAndShowSwal(): void {
  this.closeModal.nativeElement.click(); // Ferme le modal
  Swal.fire({ // Affiche la boîte de dialogue Swal
    title: '',
    text: 'Ajout Avec succès',
    icon: 'success',
    confirmButtonText: 'Close'
  });
}
  onsub(){
    // console.log(this.CategorieForm.value.nomCat)
    if (!this.validForm()) {
      return
    }
    console.log(this.CategorieForm.value)
    this.CS.OnSave(this.CategorieForm.value).subscribe(()=> {
      this.getCategorie();

      Swal.fire({
        title: '',
        text: 'Ajout Avec succes',
        icon: 'success',
        confirmButtonText: 'Ok'
      }).then((result) => {
        if (result.isConfirmed) { // Vérifie si l'utilisateur a cliqué sur le bouton de confirmation
          location.reload();
          this.getCategorie();
        }
      });



    });
  }

  closeModalAndResetForm() {
    this.CategorieForm.reset(); // Réinitialiser le formulaire
    this.closeModal.nativeElement.click(); // Fermer le modal

  }
  delete(i: any) {
    const dialogRef = this.viewContainer.createComponent(ConfirmationComponent)
    dialogRef.instance.visible = true;
    dialogRef.instance.action.subscribe(x => {
      if (x) {
        this.CS.OnDelate(i).subscribe(()=>{

          this.getCategorie();
        })
        dialogRef.instance.visible = false;
        Swal.fire({
          title: '',
          text: 'Categorie archivé avec success',
          icon: 'success',
          confirmButtonText: 'Close'
        })
      }
    })
  }




}
