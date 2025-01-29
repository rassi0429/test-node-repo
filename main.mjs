const discordWebHookUrl = "https://discord.com/api/webhooks/1293255132401766430/8zM82e-9ZIKJzuhcMSY9L2A6Yoe7aLGM8zZSxSnFtTsyhMn1KFOnWfF4wwbJaqkOPcxz"


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
    .then(response => response.json())
}

setInterval(post, 10000)