const mainPrompt = [
    {
        name: "select",
        description: "Escolha a ferramenta (1 - QRCODE OU 2 - PASSWORD)",
        patern: /^[1-2]+$/,
        message: "Esolha apenas entre 1 e 2",
        required: true,
    }
]