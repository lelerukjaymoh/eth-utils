import { decoder, Streamer } from '@jay/eth-utils';
import { providers } from 'ethers';

class Test {
    constructor() { }

    stream() {
        const wsUrl = process.env.WS_URL!
        const streamer = new Streamer(wsUrl)
        const provider = new providers.WebSocketProvider(wsUrl)

        streamer.streamPendingTxns((data) => {
            // console.log(data)

            if (data) {
                const inputData = data?.data
                console.log(decoder.decodeRouterData(inputData, provider))
            }

        })
    }
}

const test = new Test()

test.stream()