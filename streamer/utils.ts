import { providers } from "ethers"

class Utils {
    constructor() { }

    async getTransactionResponse(txHash: string, wsProvider: providers.WebSocketProvider): Promise<providers.TransactionResponse | undefined> {
        try {
            return wsProvider.getTransaction(txHash)
        } catch (error) {
            console.log("\nError getting transaction response ", error)
        }
    }
}

export const streamUtils = new Utils()