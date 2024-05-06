// Load the auth2 library and API client library.
function loadAuth() {
  gapi.load('client:auth2', initClient);
}

async function initClient() {
  await gapi.client.init({
    apiKey: 'AIzaSyDucddPFs8W1-BEcnDAUJRBY9x1-myZBLI', // Provide your API key here
    clientId: '729029115604-rfmll816imkosfct8riqshe824chmrn9.apps.googleusercontent.com', // Provide your OAuth 2.0 Client ID here
    discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
    scope: "https://www.googleapis.com/auth/spreadsheets"
  });

  gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
  updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
}

function updateSigninStatus(isSignedIn) {
  if (isSignedIn) {
    document.getElementById('update-sheet-button').style.display = 'block';
    document.getElementById('update-sheet-button').onclick = updateSheet;
  } else {
    document.getElementById('auth-button').style.display = 'block';
    document.getElementById('auth-button').onclick = handleAuthClick;
  }
}

function handleAuthClick() {
  gapi.auth2.getAuthInstance().signIn();
}

function handleSignoutClick() {
  gapi.auth2.getAuthInstance().signOut();
}

async function updateSheet() {
  const params = {
    spreadsheetId: '1a3KCmXKnDxqsdwZUPVJ8JkuoKOfEBMLNXCmQvutKdBE', // Please make sure this is your spreadsheet ID
    range: 'A2:Z1000',
    valueInputOption: 'RAW'
  };

  const valueRangeBody = {
    values: [new Array(25).fill("New Data")] // Update this as necessary
  };

  try {
    const response = await gapi.client.sheets.spreadsheets.values.update(params, valueRangeBody);
    console.log(`${response.result.updatedCells} cells updated.`);
    document.getElementById('content').textContent = `${response.result.updatedCells} cells updated.`;
  } catch (err) {
    console.error('Failed to update spreadsheet:', err);
    document.getElementById('content').textContent = 'Error: ' + err.message;
  }
}

export { loadAuth };
