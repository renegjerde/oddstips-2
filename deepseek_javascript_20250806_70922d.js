// Statisk database med lag og statistikk
const teams = {
    "Molde": { position: 1, homeStrength: 0.8 },
    "Bodø/Glimt": { position: 2, homeStrength: 0.7 },
    "Viking": { position: 3, homeStrength: 0.6 }
    // Legg til alle Eliteserien-lag
};

// Kampoppsett (manuelt oppdatert)
const matches = [
    { home: "Molde", away: "Viking", date: "2024-08-25" },
    { home: "Bodø/Glimt", away: "Lillestrøm", date: "2024-08-25" }
];

function generateTips() {
    let html = "";
    
    matches.forEach(match => {
        const homeTeam = teams[match.home];
        const awayTeam = teams[match.away];
        
        // Enkel analyse
        let prediction;
        if (homeTeam.position <= awayTeam.position - 3) {
            prediction = `${match.home} vinner`;
        } else if (homeTeam.position >= awayTeam.position + 3) {
            prediction = `${match.away} vinner eller uavgjort`;
        } else {
            prediction = "Tett kamp - vurder uavgjort";
        }

        html += `
            <div class="tip">
                <strong>${match.home} vs ${match.away}</strong><br>
                <em>Tips:</em> ${prediction}<br>
                <small>${match.date}</small>
            </div>
        `;
    });

    document.getElementById("tips-container").innerHTML = html || "Ingen kamper i dag.";
}

// Generer tips når siden lastes
generateTips();