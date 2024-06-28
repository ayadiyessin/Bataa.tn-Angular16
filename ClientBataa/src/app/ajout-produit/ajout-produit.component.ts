import { Component, OnInit  } from '@angular/core';
import { environment } from '../environnement';
import { ScriptService } from 'src/Services/script.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from 'src/Services/produit.service';
import { PhotoService } from 'src/Services/photo.service';
import { Produit } from 'src/Modeles/Produit';
import { CategorieService } from 'src/Services/categorie.service';
import { SouscategorieService } from 'src/Services/souscategorie.service';
import { Categorie } from 'src/Modeles/Categorie';
import { SousCategorie } from 'src/Modeles/SousCategorie';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.css']
})
export class AjoutProduitComponent implements OnInit{
  uploadedImage = '';
  isDisabled = false;
  uploadedImages: string[] = [];
  categ!:Categorie[]
  produitsRechercher!: string;
  etatProduit: string = '';
  verif:boolean = false;
  dataaSC!:SousCategorie[]
  constructor(private scriptService: ScriptService,private PS:ProduitService,private PHS:PhotoService,private router: Router, private CS:CategorieService, private SCS:SouscategorieService) {
    this.scriptService.load('uw');
  }

  form!:FormGroup //bech njibo les données mte3 formulaire kemla fi west variable esemha form
  //iduser = localStorage.getItem("connecte");
  iduser = localStorage.getItem("idUs");
  dataa!: Produit;
  ngOnInit(): void {
    this.initForm();
    this.getCategorie();
  }

  initForm(): void
   {
     this.form=new FormGroup({
       nom: new FormControl(null,[Validators.required]),
       description:new FormControl(null,[Validators.required]),
       etat_produit: new FormControl(0,[Validators.required]),
       prix_unitaire:new FormControl(null,[Validators.required]),
       date_expiration: new FormControl(null,[Validators.required]),
       valide_produit:new FormControl(0,[Validators.required]),
       etat_vente: new FormControl(0,[Validators.required]),
       categorieID:new FormControl(0,[Validators.required]),
       scategorieID:new FormControl(0,[Validators.required]),
       utilisateurID:new FormControl(this.iduser,[Validators.required])
     })
   }

   onsub(): void {
    const produitToSave = this.form.value;
    this.PS.OnSave(produitToSave).subscribe((result) => {
      this.dataa = result;
      if(this.uploadedImages.length>6){
        for (let i = 0; i < 6; i++) { // Ajout de la déclaration de i
          let phot = {
            lien_photo: this.uploadedImages[i],
            produitID: this.dataa.id
          };
          this.PHS.OnSave(phot).subscribe(() => {
            console.log("Photo ajoutée");
          });
        }
      }
      else {
        for (let i = 0; i < this.uploadedImages.length; i++) { // Ajout de la déclaration de i
          let phot = {
            lien_photo: this.uploadedImages[i],
            produitID: this.dataa.id
          };
          this.PHS.OnSave(phot).subscribe(() => {
            console.log("Photo ajoutée");
          });
        }
      }

      Swal.fire({
        title: '',
        text: 'L\'ajout du produit a été effectué avec succès',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/listproduit']);
        }
      });

    });
  }



  processResults = (error: any, result: any): void => {
    if (result.event === 'close') {
      this.isDisabled = false;
    }
    if (result && result.event === 'success') {
      const secureUrl = result.info.secure_url;
      const previewUrl = secureUrl.replace('/upload/', '/upload/w_400/');
      this.uploadedImages.push(previewUrl);
      this.isDisabled = false;
    }
    if (error) {
      this.isDisabled = false;
    }
  };

  cloudName = environment.CLOUD_NAME;
  uploadPreset = environment.UPLOAD_PRESET;

  uploadWidget = (): void => {
    this.isDisabled = true;
    window.cloudinary.openUploadWidget(
      {
        cloudName: this.cloudName,
        uploadPreset: this.uploadPreset,
        sources: ['local', 'url'],
        tags: ['myphotoalbum-angular'],
        clientAllowedFormats: ['image'],
        resourceType: 'image',
      },
      this.processResults
    );
    console.log(this.uploadedImages);
  };

  getCategorie()
  {
    this.CS.OnGet().subscribe((result) => {
      this.categ = result;
    });
  }

  GetrechercherProduits() {

    const idCategorie = this.form.get('categorieID')?.value;
    console.log(idCategorie)
    if (idCategorie) {
        this.SCS.OnGetByCateg(idCategorie).subscribe(
            (data) => {
                this.dataaSC = data;
            },
            (error) => {
                console.error("Une erreur s'est produite : ", error);
            }
        );
    }
  }



}
