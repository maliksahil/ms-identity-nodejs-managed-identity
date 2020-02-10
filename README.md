# Managed Identity accessing key vault using NodeJS

# Setup

1. Create an app service, with a managed identity
2. Create a key vault, create a secret there, and create an access policy allowing the managed identity secret management access.
3. Update the following lines in your code
```
const KEY_VAULT_URL = 'https://<kvname>.vault.azure.net/';
const SECRET_NAME = '<secretname>';
```
4. Deploy the application to the app service.
5. Run it, and verify that you are able to access the secret via the managed identity.