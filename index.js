const express = require('express');
const KeyVaultSecret = require('@azure/keyvault-secrets');
const identity = require('@azure/identity');

const KEY_VAULT_URL = 'https://<kvname>.vault.azure.net/';
const SECRET_NAME = '<secretname>';

let app = express();
app.get('/', function (req, res) {
  const credential = new identity.DefaultAzureCredential();
  const client = new KeyVaultSecret.SecretClient(KEY_VAULT_URL, credential);
  client.getSecret(SECRET_NAME).then(function (secret) {
    res.send(`Your secret value is: ${secret.value}.`);
  }).catch(function (err) {
    res.send(err);
  });
});

let port = 8080;

app.listen(port, function () {
  console.log(`Server running at http://localhost:${port}`);
});