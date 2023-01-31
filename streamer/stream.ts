import { providers } from "ethers";
import { streamUtils } from "./utils";

export class Streamer {
    wsProvider: providers.WebSocketProvider

    constructor(wsURL: string) {
        this.wsProvider = new providers.WebSocketProvider(wsURL)
    }

    streamPendingTxns(callback: (txnResponse: providers.TransactionResponse | undefined) => void) {
        this.wsProvider.on("pending", async (txHash: string) => {
            const txnResponse = await streamUtils.getTransactionResponse(txHash, this.wsProvider)

            if (txnResponse) {
                callback(txnResponse)
            }
        })
    }
}

