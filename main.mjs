const discordWebHookUrl = "https://discord.com/api/webhooks/650247235770122241/PKWJ0I1gATbvAp2tqBDEecaurYRMkmY5M0KWfH5Ar08hZoSOfDoC1HnM34DQrLyNmUWN"


const post = async () => {
fetch(discordWebHookUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        content: 'Hello, World!',
    }),
    })

    console.log("Posted!")
}

setInterval(post, 10000)