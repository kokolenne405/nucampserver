const express = require("express");

const partnerRouter = express.Router();

partnerRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will send partner to you");
  })
  .post((req, res) => {
    res.end(
      `Will add the partner: ${req.body.name} with description ${req.body.description}`
    );
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on  /partner");
  })
  .delete((req, res) => {
    res.end("Deleting all partner");
  });

//Promotion ID.
partnerRouter
  .route("/:partnerId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end(`Will send all the partner to you: ${req.params.partnerId}`);
  })
  .post((req, res) => {
    res.statusCode = 403;
    res.end(
      `POST operation not supported on /campsites/${req.params.partnerId}`
    );
  })
  .put((req, res) => {
    res.write(`Updating the partner: ${req.params.partnerId} \n`);
    res.end(
      `Will update the partner:${req.body.name} with description: ${req.body.description}`
    );
  })
  .delete((req, res) => {
    res.end(`Deleting all the partner with ID: ${req.params.partnerId}`);
  });

module.exports = partnerRouter;
