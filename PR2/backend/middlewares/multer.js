import multer from "multer";

/*a new file will be called as uploads where the files will be stored in  */
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});
export const upload = multer({ storage: storage });