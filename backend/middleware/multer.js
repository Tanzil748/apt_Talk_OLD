import multer from "multer";
import cloudinary from "../utils/cloudinary.js";
import { CloudinaryStorage } from "multer-storage-cloudinary";

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "uploads", // Specified folder in Cloudinary where the images will be stored
    allowedFormats: ["jpg", "png", "jpeg"], // Allowed formats for file upload
  },
});
export const upload = multer({ storage: storage });
