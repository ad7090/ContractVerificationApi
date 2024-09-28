
# Hardhat Contract Verification API

This Node.js application provides a RESTful API to verify Ethereum smart contracts using Hardhat. The API accepts a contract address, constructor arguments, and the contract path/name, then runs the Hardhat verification process.

## Requirements

- Node.js (>=14.x)
- NPM (comes with Node.js)
- Hardhat
- Etherscan API key (set up in your Hardhat configuration)

## Installation

1. Clone the repository or copy the project files.

## Running the App

1. nstall the required dependencies and config the app, run:

   ```bash
   npm run config
   ```

2. Alternatively, you can run the app directly with Node.js:

   ```bash
   node app.js
   ```

   The server will be started on port `3000`. You can modify this port by editing the `PORT` variable in the `app.js` file.

## API Usage

### Endpoint: `/verify`

#### Method: `POST`

This endpoint verifies a smart contract on the blockchain using Hardhat.

#### Request Format

- **URL**: `http://localhost:3000/verify`
- **Method**: `POST`
- **Content-Type**: `application/json`

#### Request Body

The request body should be in JSON format and include the following fields:

- `address` (string): The contract address to verify.
- `constructorArguments` (array): An array of constructor arguments for the contract.
- `contract` (string): The contract path and name, in the format `contracts/Token.sol:Token`.

#### Example Request:

```bash
curl -X POST http://localhost:3000/verify \
-H "Content-Type: application/json" \
-d '{
  "address": "0x25E....",
  "constructorArguments": ["unlockTime", "SMP"],
  "contract": "contracts/Token.sol:Token"
}'
```

#### Example Response:

If the contract is successfully verified:

```json
{
  "message": "Contract verified successfully!"
}
```

If the contract is already verified:

```json
{
  "message": "Already verified!"
}
```

If there's an error, you'll get an error message with a `500` status code.

#### Error Response Example:

```json
{
  "error": "Error message here"
}
```

## Project Structure

- `app.js`: Main application file that sets up the API server and handles contract verification requests.
- `package.json`: Contains dependencies and scripts for running the app.
- `node_modules/`: Directory containing all Node.js dependencies (created after running `npm install`).

## License

This project is licensed under the MIT License.

---

Feel free to modify the `README.md` to suit your specific project details. Let me know if you need any additional information!
