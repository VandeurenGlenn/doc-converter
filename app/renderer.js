'use strict';
const xlsxToJson = require('./scripts/xlsx-to-json');
const save = require('./scripts/save.js')

window.DocConverter = window.DocConverter || {};

window.DocConverter = {xlsxToJson: xlsxToJson, save: save};
