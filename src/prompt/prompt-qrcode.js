import chalk from "chalk";

const promptQRCode = [
    {
        name: "link",
        descripition: chalk.yellow("Digite o link para gerar o QR CODE"),
    },
    {
        name: "type",
        descripition: chalk.yellow("Escolha entre o tipo de QRcode (1- NORMAL ou 2- TEMINAL):"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Escolha apenas entre 1 e 2")
    }
]

export{
    promptQRCode
}