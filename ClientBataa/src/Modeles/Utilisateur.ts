export interface Utilisateur {
    id: string;
    prenom_user: string;
    nom_user: string;
    image_user: string;
    ville_user: string;
    adresse_user: string;
    telephone_user: number;
    userID: string;
    user : {
      id: string;
    email: string;
    email_verified_at:string;
    pssword:string;
    type_user:string;
    valid_user:number;
    }
  }