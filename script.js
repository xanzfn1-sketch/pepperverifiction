document.getElementById('verifyForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const epicName = document.getElementById('epicName').value;
    const discordUser = document.getElementById('discordUser').value;

    // Paste your Discord staff channel webhook URL here
    const webhookURL = 'YOUR_DISCORD_WEBHOOK_URL_HERE';

    const payload = {
        content: "🚨 **New Verification Request Received!**",
        embeds: [{
            title: "Peper Scrims Screening",
            color: 16729344,
            fields: [
                { name: "Epic ID", value: epicName, inline: true },
                { name: "Discord User", value: discordUser, inline: true }
            ],
            timestamp: new Date().toISOString()
        }]
    };

    try {
        const response = await fetch(webhookURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            alert('Submitted successfully! Staff will review your account age.');
            document.getElementById('verifyForm').reset();
        } else {
            alert('Error sending data. Try again later.');
        }
    } catch (err) {
        console.error(err);
        alert('Network error occurred.');
    }
});
