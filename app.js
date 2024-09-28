const express = require("express");
const { run } = require("hardhat");

const app = express();
app.use(express.json()); // Middleware to parse incoming JSON request body

// POST API to verify contract
app.post("/verify", async (req, res) => {
    const { address, constructorArguments, contract } = req.body;

    if (!address || !constructorArguments || !contract) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    console.log("Verifying contract...");
    try {
        await run("verify:verify", {
            address,
            constructorArguments,
            contract,
        });
        return res.status(200).json({ message: "Contract verified successfully!" });
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Already verified!");
            return res.status(200).json({ message: "Already verified!" });
        } else {
            console.log(e);
            return res.status(500).json({ error: e.message });
        }
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
