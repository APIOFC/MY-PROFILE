async function getIPDetails() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        const ipAddress = data.ip;

        const response2 = await fetch(`https://ipinfo.io/${ipAddress}/json?token=8d6a7f38d1382f`);
        const ipInfo = await response2.json();

        document.getElementById('ip-details').innerHTML = `
            <p><strong>IP Address:</strong> ${ipInfo.ip}</p>
            <p><strong>Hostname:</strong> ${ipInfo.hostname}</p>
            <p><strong>City:</strong> ${ipInfo.city}</p>
            <p><strong>Region:</strong> ${ipInfo.region}</p>
            <p><strong>Country:</strong> ${ipInfo.country}</p>
            <p><strong>Location:</strong> ${ipInfo.loc}</p>
            <p><strong>Postal:</strong> ${ipInfo.postal}</p>
            <p><strong>Timezone:</strong> ${ipInfo.timezone}</p>
            <p><strong>Organization:</strong> ${ipInfo.org}</p>
        `;
    } catch (error) {
        document.getElementById('ip-details').innerText = 'Unable to fetch IP details.';
        console.error('Error fetching IP details:', error);
    }
}

getIPDetails();