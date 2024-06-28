import { Component, OnInit } from '@angular/core';
import { CategorieService } from 'src/Services/categorie.service';
import { ProduitService } from 'src/Services/produit.service';
import { SouscategorieService } from 'src/Services/souscategorie.service';
import { UserService } from 'src/Services/user.service';
import { UtilisateurService } from 'src/Services/utilisateur.service';
import { ChartType , ChartDataset, ChartOptions } from 'chart.js';
import { data } from 'jquery';
// import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ville_user: string[]=["sfax","Tunisie","nabeul","sousse"]
  categorieProduit: string[]=[]
  int_ville_user!: number[];
  idcategories: String[]=[];
  CountProduitBycategories: number[]=[];
  nbuserEnAtt!: string;
  nbuserConf!: string;
  nbprodEnAtt!: string;
  nbprodconf!: string;
  nbvendeur!: number;
  nbsousCat!: string;
  nbCatArch!: string;
  nbCategiorieNONArch!: string;
  OnLoud:boolean=false;
  OnLoud1:boolean=false;
  OnLoud3:boolean=false;
  OnLoud2:boolean=false;
  OnLoud4:boolean=false;
  OnLoud5:boolean=false;
  OnLoud6:boolean=false;
  OnLoud7:boolean=false;
  nbsf:number=0;
  nbtunisia:number=0;
  nabenabylie:number=0;
  nabsouse:number=0;
  // doughnutChartLabels: Label[] = this.ville_user;
  // doughnutChartData: MultiDataSet = [
  //   this.int_ville_user
  // ];
  // doughnutChartType: ChartType = 'doughnut';

  // pie
  // chartOptions: ChartOptions = {};
  // chartDatapie: ChartDataset[] = [
  //   {
  //     label: '',
  //     data: this.int_ville_user, // bech t7ot nomber de teacher et nomber de stoudent
  //   }
  // ];
  // chartLabelspie: string[] = this.ville_user;

  chartOptions: ChartOptions = {};
  chartDatapie: ChartDataset[] = [
    {
      data: [] , //this.int_ville_user [this.nbsf,this.nbtunisia,this.nabenabylie,this.nabsouse]
      backgroundColor: ['#FA6384', '#36A2EB', '#FFCE56' , '#11CE56'] // Couleurs pour chaque tranche
    }
  ];
  chartLabelspie: string[] = this.ville_user;


  chartDatabar: ChartDataset[] = [
    {
      label: 'Nomber de produit par Categories',
      data: [] ,//this.CountProduitBycategories
    }
  ];
  chartLabelsbar: string[] = [] ;//this.categorieProduit

  /// hethy chart 2

  // barChartOptions: ChartOptions = {
  //   responsive: true,
  // };
  // barChartLabels: Label[] = this.categorieProduit;
  // barChartType: ChartType = 'bar';
  // barChartLegend = true;
  // barChartPlugins = [];
  // barChartData: ChartDataSets[] = [
  //   { data: this.CountProduitBycategories, label: 'Nomber de produit par Categories' }
  // ];



  constructor(private UT : UserService,private UTT : UtilisateurService,private CT : CategorieService , private SCT : SouscategorieService , private PT : ProduitService) { }

  ngOnInit(): void {
    // this.UT.OnGetCountUserNonValider().subscribe(data => {
    //   if(data===null)
    //   {
    //     this.nbuserEnAtt="0";
    //   }
    //   else{
    //     this.nbuserEnAtt=data;
    //   }
    //   console.log("prod ach non conf "+this.nbuserEnAtt);
    //   this.OnLoud=true;

    // });
    this.UT.OnGetCountUserValider().subscribe(data => {
      if(data===null)
      {
        this.nbuserConf="0";
      }
      else{
        this.nbuserConf=data;
      }
      console.log("prod arch conf "+this.nbuserConf);
      this.OnLoud1=true;

    });
    this.PT.OnGetCountVendeurValider().subscribe(data => {

      this.nbvendeur=data;

      console.log("prod vedeur "+this.nbvendeur);
      this.OnLoud2=true;

    });
      // this.PT.OnGetVendeur().subscribe(data => {

      //   if(data===null)
      //       {
      //         this.nbvendeur="0";
      //       }
      //       else{
      //         this.nbvendeur=data.concat().toString();
      //       }
      //       console.log("prod vedeur "+this.nbvendeur);
      // });
    // this.CT.OnGetCountCategorieArchiver().subscribe(data => {
    //   if(data===null)
    //   {
    //     this.nbCatArch="0";
    //   }
    //   else{
    //     this.nbCatArch=data;
    //   }
    //   console.log("prod cat arch "+this.nbCatArch);
    //   this.OnLoud3=true;

    // });
    this.CT.OnGetCountCategorieValider().subscribe(data => {
      if(data===null)
      {
        this.nbCategiorieNONArch="0";
      }
      else{
        this.nbCategiorieNONArch=data;
      }
      console.log("prod cat conf "+this.nbCategiorieNONArch);
      this.OnLoud4=true;

    });
    // this.SCT.OnGetCountSousCATValider().subscribe(data => {
    //   if(data===null)
    //   {
    //     this.nbsousCat="0";
    //   }
    //   else{
    //     this.nbsousCat=data;
    //   }
    //   console.log("prod sousCat "+this.nbsousCat);
    //   this.OnLoud5=true;

    // });
    // this.PT.OnGetCountProduitNonValider().subscribe(data => {
    //   if(data===null)
    //   {
    //     this.nbprodEnAtt="0";
    //   }
    //   else{
    //     this.nbprodEnAtt=data;
    //   }
    //   console.log("prod en att "+this.nbprodEnAtt);
    //   this.OnLoud6=true;

    // });
    this.PT.OnGetCountProduitValider().subscribe(data => {
      if(data===null)
      {
        this.nbprodconf="0";
      }
      else{
        this.nbprodconf=data;
      }
      console.log("prodconf "+this.nbprodconf);
      this.OnLoud7=true;

    });
    this.getUtilisateur();
    this.getcategorie();
    this.getproduitbycategorie();
  }
  // chart js
  getUtilisateur(){
    this.UTT.getAcheteurConfirmer().subscribe(x =>{
      // let nbsf=0;
      // let nbtunisia=0;
      // let nabenabylie=0;
      // let nabsouse=0;
      console.log(x);
      x.forEach(element => {
        if(element.ville_user=="sfax")
          this.nbsf++;
        if(element.ville_user=="Tunisie")
          this.nbtunisia++;
        if(element.ville_user=="nabeul")
          this.nabenabylie++;
        if(element.ville_user=="sousse")
          this.nabsouse++;
        //this.chartLabels[i]=element.name;
        // this.chartLabels.push(element.name);
        // this.Labeldata.push(element.tab_pub.length)
        // i++;

      }

    );
    this.int_ville_user=[this.nbsf,this.nbtunisia,this.nabenabylie,this.nabsouse];
    this.chartDatapie =[
      {data : this.int_ville_user,
        backgroundColor: ['#FA6384', '#36A2EB', '#FFCE56' , '#11CE56']
      }
    ];
    // this.int_ville_user.push(nbsf);
    // this.int_ville_user.push(nbtunisia);
    // this.int_ville_user.push(nabenabylie);
    // this.int_ville_user.push(nabsouse);
    console.log("count ville" ,this.int_ville_user);
    console.log("liste ville" ,this.ville_user);
    this.OnLoud=true
    })
  }
  getproduitbycategorie(){
    this.PT.getProduitValider().subscribe(x=>{
      let nbcat1 =0;
      let nbcat2 =0;
      let nbcat3 =0;
      x.forEach(element => {
        if(element.sous_categories.categorieID==this.idcategories[0])
          nbcat1++;
        if(element.sous_categories.categorieID==this.idcategories[1])
          nbcat2++;
        if(element.sous_categories.categorieID==this.idcategories[2])
          nbcat3++


      });
      this.CountProduitBycategories=[nbcat1,nbcat2,nbcat3];
      console.log("liste count produit",this.CountProduitBycategories);
      this.chartDatabar = [
        {
          label: 'Nomber de produit par Categories',
          data: this.CountProduitBycategories ,//this.CountProduitBycategories
        }
      ];
      this.OnLoud5=true
    })
  }
  getcategorie(){
    this.CT.OnGet().subscribe(x=>{
      x.forEach(element => {
        this.categorieProduit.push(element.nomcategorie);
        this.idcategories.push(element.id);
        this.OnLoud3=true
      });
      console.log("liste cat" , this.categorieProduit);
      console.log("idcat" , this.idcategories);
      this.chartLabelsbar = this.categorieProduit ;


    })
  }

}
