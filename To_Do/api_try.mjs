import { GoogleAuth } from 'google-auth-library';
import { google } from 'googleapis';

function authenticate() {
  return window.gapi.auth2.getAuthInstance()
      .signIn({scope: "https://www.googleapis.com/auth/spreadsheets"})
      .then(function() { console.log("Sign-in successful"); },
            function(err) { console.error("Error signing in", err); });
}

function loadSheetsApi() {
  gapi.client.load('sheets', 'v4');
}



/**
 * Updates values in a Spreadsheet.
 * @param {string} spreadsheetId The spreadsheet ID.
 * @param {string} range The range of values to update.
 * @param {string} valueInputOption Value update options. ('RAW' or 'USER_ENTERED')
 * @param {(string[])[]} _values A 2d array of values to update.
 * @return {Promise<object>} Returns a promise that resolves with the spreadsheet information.
 */
async function updateValues(spreadsheetId, range, valueInputOption, _values) {
  const {GoogleAuth} = require('google-auth-library');
  const {google} = require('googleapis');

  const auth = new GoogleAuth({
      scopes: 'https://www.googleapis.com/auth/spreadsheets',
  });

  const service = google.sheets({version: 'v4', auth});
  const resource = {
      values: _values, // Assign the function parameter _values to the request body
  };

  try {
      const result = await service.spreadsheets.values.update({
          spreadsheetId,
          range,
          valueInputOption,
          resource,
      });
      console.log('%d cells updated.', result.data.updatedCells);
      return result;
  } catch (err) {
      console.error('Failed to update spreadsheet:', err);
      // throw err; // Re-throw the error for further handling
  }
}


// Sample data array for _values
let exampleRow = new Array(25).fill("New Data");  // Each cell in a row gets 'New Data'
let dataToUpdate = new Array(999).fill(exampleRow);  // Creates 999 rows of the same data

// Example usage
updateValues(
  "1a3KCmXKnDxqsdwZUPVJ8JkuoKOfEBMLNXCmQvutKdBE", // Spreadsheet ID from your link
  "A2:Z1000", // Range
  "RAW", // Data should be entered as if by a user
  dataToUpdate, // The actual data to insert
  (response) => { console.log("Update successful!", response); } // Optional callback function
);
