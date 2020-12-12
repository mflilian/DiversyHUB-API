require("dontev-safe").config();
const { connect } = require("../model/database");
const empresaModel = require("../model/empresa");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;
const { auth } = require("./autenticacao");

connect();

