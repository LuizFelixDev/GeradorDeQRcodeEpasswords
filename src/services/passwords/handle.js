async function permitedCharacters() {

    let permited = [];

    if(process.env.UPPERCASE_LETTERS === "true")
        permited.push(..."ABCDEFGHIJKLMNOPKRSTUVWXYX")
    if(process.env.OWERCASE_LETTERS === "true")
        permited.push(..."abcdefghijklmnopkrstuvwxyz")
    if(process.env.NUMBERS === "true")
        permited.push(..."123456789")
    if(process.env.SPECIAL_CHARACTERS === "true")
        permited.push(..."!@#$%¨&*()_+")

    return permited;
}


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