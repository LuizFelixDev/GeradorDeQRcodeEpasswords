import prompt from "prompt";
import {mainPrompt} from "./prompt/prompt-main.js"
import createQRCode from "./services/qr-code/create.js";
import { createPassword } from "./services/passwords/create.js";

async function main() {
    prompt.get(mainPrompt, async(err, choose) => {
        if(err) console.log(err);

        if(choose.select == 1)await createQRCode();
        if(choose.select == 2)await createPassword();
    });
}

main();