import { cloudinary } from './environnement';

// Pour accéder aux clés d'API Cloudinary
const cloudName = cloudinary.cloudinary.cloudName;
const apiKey = cloudinary.cloudinary.apiKey;
const apiSecret = cloudinary.cloudinary.apiSecret;

export class CloudinaryModule {
}
