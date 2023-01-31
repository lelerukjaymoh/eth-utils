import { Streamer } from "../streamer/stream";
import { streamUtils } from "../streamer/utils";

class Test {
    constructor() { }

    testStreaming() {
        const streamer = new Streamer("")

        streamer.streamPendingTxns((data) => {
            console.log(data, Date.now())
        })
    }

    check(data: any) {
        console.log(data)
    }
}

const test = new Test()

test.testStreaming()