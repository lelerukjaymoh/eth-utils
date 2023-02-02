import { providers } from "ethers";
import { streamUtils } from "./utils";

export class Streamer {
    wsProvider: providers.WebSocketProvider

    constructor(wsProvider: providers.WebSocketProvider) {
        this.wsProvider = wsProvider
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

