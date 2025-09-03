import permitedCharacters from "./utils/permitedCharacters";

async function handle(){
    let character = [];
    let password = "";
    let index 

    const passwordLenght = process.env.PASSWORD_LENGHTH;

    character = await permitedCharacters();

    for(let i=0; i<process.env.PASSWORD_LENGHTH; i++){
        index = Math.floor(Math.random() *character.length);
        password += character[index];
    }
    
    return password;
}

export default handle;