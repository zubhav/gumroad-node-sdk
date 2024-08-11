# gumroad-node-sdk

A Gumroad Node.js API client with Typescript support

## Installation

To install the Gumroad Node.js SDK, run the following command:
```bash
npm install gumroad-node-sdk
```


## Usage

To use the Gumroad Node.js SDK, you need to create an instance of the `GumroadApiClient` class with your Gumroad access token. Here's an example of how to use the SDK:
```typescript
import { GumroadApiClient } from "gumroad-node-sdk";

const gumroadClient = new GumroadApiClient({
  accessToken: "your-access-token",
});

gumroadClient.getProducts().then(productsResponse => {
    console.log(productsResponse.success);
    console.log(productsResponse.products);
});
```
