export interface Enchere {
  id: number;
  conf: number;
  prix_vente: string;
  produitID: number;
  utilisateurID: number;
  created_at: string;
  updated_at: string;
  produit: {
    id: number;
    nom: string;
    description: string;
    etat_produit: string;
    prix_unitaire: string; // Assurez-vous que le type correspond au type retourné par votre API
    date_expiration: string;
    valide_produit: number;
    etat_vente: number;
    scategorieID: number; // Assurez-vous que le type correspond au type retourné par votre API
    utilisateurID: number;
    created_at: string;
    updated_at: string;
  };
  utilisateur: {
    id: number;
    prenom_user: string;
    nom_user: string;
    image_user: string;
    ville_user: string;
    adresse_user: string;
    telephone_user: number;
    userID: number;
    created_at: string;
    updated_at: string;
  };
}