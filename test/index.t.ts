import { Decoder, Streamer } from '@lelerukjaymoh/eth-utils';
import { providers } from 'ethers';

class Test {
    constructor() { }

    stream() {
        console.log(process.env.WS_URL!)
        const provider = new providers.WebSocketProvider(process.env.WS_URL!)
        const streamer = new Streamer(provider)

        streamer.streamPendingTxns((data: any) => {

            if (data) {
                const inputData = data?.data
                console.log(Decoder.decodeRouterData(inputData, provider))
            }

        })
    }
}

const test = new Test()

test.stream()