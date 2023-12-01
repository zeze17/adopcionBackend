const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const UsuarioRouter = require("./routers/UsuarioRouter");
const AdopcionRouter = require("./routers/AdopcionRouter");
const MascotaRouter = require("./routers/MascotaRouter");
const VacunaRouter = require('./routers/VacunaRouter');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// usuarios
app.use("/usuario", UsuarioRouter);
// adopcion
app.use("/adopcion", AdopcionRouter);
// mascotas
app.use("/mascota", MascotaRouter)
// vacuna
app.use("/vacuna", VacunaRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT);