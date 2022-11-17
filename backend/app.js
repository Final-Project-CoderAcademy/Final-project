import path from 'path'
import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import helmet from "helmet";
import cors from "cors";
// middleware for handling error
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
// routes
import siteRoutes from "./routes/siteRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";

dotenv.config();

const app = express();
app.use(function (req, res, next) {
  res.setHeader(
    'Content-Security-Policy-Report-Only',
    "default-src 'self'; font-src 'self'; img-src 'self' https://images.unsplash.com/photo-1515861461225-1488dfdaf0a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80; script-src 'self' https://kit.fontawesome.com/56a258cb08.js https://maps.googleapis.com/maps/api/js?callback=__googleMapsCallback&key=AIzaSyC_mJ_HcnWHVnTY4RmWl6U8t2C6r-jdJTY&libraries=places; style-src 'self'; frame-src 'self'"
  );
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/sites", siteRoutes);
app.use("/api/users", userRoutes);
app.use("/api/blogs", blogRoutes);
app.use('/api/upload', uploadRoutes)
// upload folder used as static files folder 
const __dirname = path.resolve()
app.use('/upload', express.static(path.join(__dirname, '/upload')))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '/frontend/build/index.html'));
  })
} else {
  // test server connection
  app.get("/", (req, res) => {
    res.status(200);
    res.json({ message: ">>>>>Server is connected<<<<<" });
  });
}

app.use(notFound);
app.use(errorHandler);

export default app
