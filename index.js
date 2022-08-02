const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');
const config = require("./config.json");
const disbut = require("discord-buttons");
disbut(client);
const axios = require("axios");
var mysql = require('mysql');
const webhook = require("webhook-discord")
const simplydjs = require('./module.js');
const http = require('https');
const fs = require('fs');
const Enmap = require('enmap');
const Version = 1.2

if(config.ticket.on) { require("./handler/ticket/index")(client, config, disbut); }

if(config.ticket.on) {
  simplydjs.clickBtn(button)