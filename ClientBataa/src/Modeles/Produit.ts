export interface Produit{
    id: string;
    nom: string;
    description: string;
    etat_produit: string;
    prix_unitaire: number;
    date_expiration: string;
    valide_produit: number;
    etat_vente: number;
    scategorieID:string;
    SousCategories : {
        id: string;
        nomscategorie: string;
        ArchiveSouscategorie : string;
        categorieID : string;
    }
    utilisateurID:string;
    created_at:string;
}