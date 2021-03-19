const express = require("express");
const router = express.Router();
const _ = require("lodash");

const tornillos = require("../../tornillos.json");

//Obtener todos los tornillos
router.get("/", async (req, res) => {
  res.render("index", {
    tornillo: tornillos,
  });
});

//Añadir tornillo
router.get("/agregar", async (req, res) => {
  res.render("agregar");
});
router.post("/agregar", async (req, res) => {
  const tornillo = {
    id: tornillos.length + 1,
    nombre: req.body.nombre,
    diametro: req.body.diametro,
    longitud: req.body.longitud,
    rosca: req.body.rosca,
    cabeza: req.body.cabeza,
    claseCabeza: req.body.claseCabeza,
    material: req.body.material,
  };
  tornillos.push(tornillo);
  res.redirect("/");
});

//Editar tornillo
router.get("/editar/:id", async (req, res) => {
  let tornillo = {};
  console.log(tornillo);
  console.log(req.params.id);
  tornillos.forEach((tor) => {
    if (tor.id == req.params.id) {
      tornillo = tor;
    }
  });
  console.log(tornillo);
  res.render("editar", {
    tornillo,
  });
});
router.post("/editar/:id", async (req, res) => {
  tornillos.forEach((tor) => {
    if (tor.id == req.params.id) {
      (tor.nombre = req.body.nombre),
        (tor.diametro = req.body.diametro),
        (tor.longitud = req.body.longitud),
        (tor.rosca = req.body.rosca),
        (tor.cabeza = req.body.cabeza),
        (tor.claseCabeza = req.body.claseCabeza),
        (tor.material = req.body.material);
    }
  });
  res.redirect("/");
});

//Eliminar tornillo
router.get("/delete/:id", async (req, res) => {
  _.remove(tornillos, (tor) => {
    return tor.id == req.params.id;
  });
  res.redirect("/");
});

module.exports = router;
