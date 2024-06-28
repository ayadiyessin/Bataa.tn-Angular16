export interface Produit {
    id: string;
    nom: string;//
    description: string;
    etat_produit: string;//
    prix_unitaire: number;//
    date_expiration: string;
    valide_produit: number;
    etat_vente: number;
    scategorieID:string;
    utilisateurID:string;
    created_at:string;
    sous_categories:{
      id: string;
      nomscategorie : string,
      categorieID:string,
      ArchiveSouscategorie : string,
    }
    utilisateur
    :{
      id: string;
    prenom_user: string;
    nom_user: string;
    image_user: string;
    ville_user: string;
    adresse_user: string;
    telephone_user: number;
    userID: string;
    }

  }
