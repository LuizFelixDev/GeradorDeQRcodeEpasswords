import prompt from "prompt";
import { handle } from "./handle.js";
import { promptQRCode } from "../../prompt/prompt-qrcode.js";

async function createQRCode(){
    prompt.get(promptQRCode, handle);
    prompt.start()
}

export default createQRCode;