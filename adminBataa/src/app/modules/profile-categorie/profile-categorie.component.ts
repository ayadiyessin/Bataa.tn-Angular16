import { Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SousCategorie } from 'src/Modeles/SousCategorie';
import { ActivatedRoute } from '@angular/router';
import { SouscategorieService } from 'src/Services/souscategorie.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Categorie } from 'src/Modeles/Categorie';
import { CategorieService } from 'src/Services/categorie.service';
import { ArchivemodalComponent } from '../archivemodal/archivemodal.component';
@Component({
  selector: 'app-profile-categorie',
  templateUrl: './profile-categorie.component.html',
  styleUrls: ['./profile-categorie.component.css']
})
export class ProfileCategorieComponent implements OnInit {
  idcourant!:string
  NomCat!:string
  OnLoud:boolean=false;
  OnLoud1:boolean=false;
  constructor(private _liveAnnouncer: LiveAnnouncer,private activatedRoute:ActivatedRoute,private CS:CategorieService,private SCAT:SouscategorieService,private viewContainer: ViewContainerRef){
  }
  errors: any = [];
  formError: any = {};
  isFocused: boolean = false;// pour les errors de form

  dataa!:Categorie
  SouCategorieForm = new FormGroup({
    nomscategorie: new FormControl('', [Validators.required]),
  });
  ngOnInit(): void {
    // this.GetProduitByUser();

     // hethi kima onLoad kif t7el page yetebwanti 3ala hethi méthode ama tzid implements OnInit
    //recuperer l'id de url
    this.idcourant=this.activatedRoute.snapshot.params['id'] ;
    // console.log(this.idcourant)
    if(!!this.idcourant) // !! hethoum ye9esdo bihom "troli" ma3neha ken idcourant mawjoud men asslo wala ma3neha différent undifined
    {
      this.getSousCt();
      this.CS.getCategorieById(this.idcourant).subscribe((result)=>{
        this.dataa=result;
        this.NomCat=this.dataa.nomcategorie;
        console.log(this.NomCat)
        this.OnLoud1=true;
      })

    }

  }
  datasource =new MatTableDataSource<SousCategorie>();
  displayedColumns: string[] = ['id','nomscategorie','action'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('closeModal') closeModal: ElementRef


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
  getSousCt(){
    this.SCAT.OnGet(this.idcourant).subscribe((r)=>{
      //this.datasource.data=r;
      this.datasource = new MatTableDataSource<SousCategorie>(r);
      this.OnLoud=true;
    })
  }

  validForm() { // controle form
    this.errors = [];
    this.formError = {};
    let validFlag = true;
    if (!this.SouCategorieForm.value.nomscategorie) {
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
      this.formError.errorFornom = 'Il faut remplir le nom de la sous catégorie';
    }
  }
  onsub(){
    // console.log(this.CategorieForm.value.nomCat)

    if (!this.validForm()) {
      return
    }
    let myDictionary = {
      categorieID: this.idcourant,
      nomscategorie: this.SouCategorieForm.value.nomscategorie,
      // Ajoutez d'autres paires clé-valeur au besoin
  };
    console.log(myDictionary)
    console.log(this.SouCategorieForm.value)
    this.SCAT.OnSave(myDictionary).subscribe(()=> {
      this.getSousCt();

      Swal.fire({
        title: '',
        text: 'Ajout Avec succes',
        icon: 'success',
        confirmButtonText: 'Ok'
      }).then((result) => {
        if (result.isConfirmed) { // Vérifie si l'utilisateur a cliqué sur le bouton de confirmation
          location.reload();
          this.getSousCt();
        }
      });



    });
  }
  closeModalAndResetForm() {
    this.SouCategorieForm.reset(); // Réinitialiser le formulaire
    this.closeModal.nativeElement.click(); // Fermer le modal

  }
  delete(i: any) {
    const dialogRef = this.viewContainer.createComponent(ArchivemodalComponent)
    dialogRef.instance.visible = true;
    dialogRef.instance.action.subscribe(x => {
      if (x) {
        console.log(i);
        this.SCAT.OnDelate(i).subscribe(()=>{
          console.log("aaaaa")
          this.getSousCt();
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
