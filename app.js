const prompt = require("prompt-sync")();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Customer = require("./models/customer");
const dotenv = require("dotenv");
const express = require("express");

const app = express();

dotenv.config();
const username = prompt("What is your name? ");

console.log(`Your name is ${username}`);

const options = [
  "Create a customer",
  "View all customers",
  "Update a customer",
  "Delete a customer",
  "Quit",
];

const showOptions = () => {
  console.log("What would you like to do?");
  options.forEach((option, index) => {
    console.log(`${index + 1}. ${option}`);
  });
};
