import { Contract, providers, utils } from "ethers"
import routerABI from "../ABI/routerABI.json"

class Decoder {
    constructor() { }

    decodeRouterData(contractAddress: string, provider: providers.WebSocketProvider): Contract {
        return new Contract(contractAddress, routerABI, provider)
    }

}

export const contract = new Decoder()