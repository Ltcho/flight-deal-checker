<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Transfer Partners - Travel Tools</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            background: #FFFBED;
            min-height: 100vh;
            padding: 20px;
        }

        .nav-container {
            max-width: 800px;
            margin: 0 auto 20px;
            text-align: center;
        }

        .nav-menu {
            background-color: #D7FFC2;
            border: 2px solid #004449;
            border-radius: 10px;
            padding: 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
            flex-wrap: wrap;
        }

        .nav-link {
            color: #004449;
            text-decoration: none;
            padding: 8px 16px;
            border-radius: 5px;
            transition: all 0.3s ease;
            font-size: 14px;
            font-weight: 500;
        }

        .nav-link:hover {
            background: #004449;
            color: #FFFBED;
        }

        .nav-link.active {
            background: #004449;
            color: white;
            font-weight: 600;
        }

        .nav-divider {
            color: #004449;
            opacity: 0.3;
        }

        .container {
            background: white;
            border-radius: 20px;
            box-shadow: 0 10px 40px rgba(0, 68, 73, 0.1);
            padding: 40px;
            max-width: 800px;
            width: 100%;
            margin: 0 auto;
            border: 2px solid #004449;
        }

        h1 {
            color: #004449;
            text-align: center;
            margin-bottom: 10px;
            font-size: 28px;
            font-weight: 700;
        }

        .subtitle {
            text-align: center;
            color: #004449;
            margin-bottom: 30px;
            font-size: 14px;
            opacity: 0.8;
        }

        .card-selector {
            margin-bottom: 30px;
            text-align: center;
        }

        .card-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
            gap: 12px;
            margin-top: 20px;
        }

        .card-button {
            padding: 12px 20px;
            background: white;
            border: 2px solid #004449;
            border-radius: 10px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 14px;
            font-weight: 500;
            color: #004449;
            opacity: 0.7;
        }

        .card-button:hover {
            background: #FFFBED;
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0, 68, 73, 0.1);
            opacity: 1;
        }

        .card-button.selected {
            background: #483CFF;
            color: white;
            border-color: #483CFF;
            opacity: 1;
        }

        .search-container {
            margin-bottom: 20px;
            position: relative;
        }

        .search-input {
            width: 100%;
            padding: 12px 40px 12px 12px;
            border: 2px solid #004449;
            border-radius: 10px;
            font-size: 16px;
            background: white;
            color: #004449;
            opacity: 0.7;
            transition: all 0.3s ease;
        }

        .search-input:focus {
            outline: none;
            background: #FFFBED;
            opacity: 1;
        }

        .search-icon {
            position: absolute;
            right: 12px;
            top: 50%;
            transform: translateY(-50%);
            color: #004449;
            opacity: 0.5;
        }

        .stats {
            display: flex;
            justify-content: center;
            gap: 30px;
            margin: 20px 0;
            padding: 15px;
            background: #FFFBED;
            border-radius: 10px;
        }

        .stat-item {
            text-align: center;
        }

        .stat-value {
            font-size: 24px;
            font-weight: 700;
            color: #483CFF;
        }

        .stat-label {
            font-size: 12px;
            color: #004449;
            opacity: 0.6;
            margin-top: 4px;
        }

        .table-container {
            overflow-x: auto;
            margin-top: 20px;
            border-radius: 10px;
            border: 2px solid #004449;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 14px;
        }

        thead {
            background: #D7FFC2;
            position: sticky;
            top: 0;
            z-index: 10;
        }

        th {
            padding: 12px;
            text-align: left;
            color: #004449;
            font-weight: 600;
            white-space: nowrap;
            border-bottom: 2px solid #004449;
        }

        tbody tr {
            border-bottom: 1px solid #e0e0e0;
            transition: background 0.2s ease;
        }

        tbody tr:hover {
            background: #FFFBED;
        }

        tbody tr:last-child {
            border-bottom: none;
        }

        td {
            padding: 12px;
            color: #004449;
        }

        .instant-badge {
            display: inline-block;
            background: #0BFF80;
            color: #004449;
            padding: 2px 8px;
            border-radius: 4px;
            font-size: 12px;
            font-weight: 600;
        }

        .slow-badge {
            display: inline-block;
            background: #FF592C;
            color: white;
            padding: 2px 8px;
            border-radius: 4px;
            font-size: 12px;
            font-weight: 600;
        }

        .ratio-main {
            font-weight: 600;
            font-size: 15px;
        }

        .ratio-note {
            display: block;
            font-size: 11px;
            color: #666;
            margin-top: 2px;
        }

        .empty-state {
            text-align: center;
            padding: 40px;
            color: #004449;
            opacity: 0.6;
        }

        @media (max-width: 640px) {
            .container {
                padding: 20px;
            }
            
            h1 {
                font-size: 24px;
            }

            .card-grid {
                grid-template-columns: repeat(2, 1fr);
            }

            .table-container {
                margin: 20px -20px;
                border-radius: 0;
                border-left: none;
                border-right: none;
            }

            th, td {
                padding: 8px;
                font-size: 12px;
            }
        }
    </style>
</head>
<body>
    <div class="nav-container">
        <nav class="nav-menu">
            <a href="index.html" class="nav-link">CPP Calculator</a>
            <span class="nav-divider">|</span>
            <a href="transfer-partners.html" class="nav-link active">Transfer Partners</a>
        </nav>
    </div>

    <div class="container">
        <h1>✈️ Credit Card Transfer Partners</h1>
        <p class="subtitle">Find transfer ratios, times, and minimum requirements for your points</p>
        
        <div class="card-selector">
            <div class="card-grid">
                <button class="card-button" onclick="selectCard('American Express')">Amex</button>
                <button class="card-button" onclick="selectCard('Bilt')">Bilt</button>
                <button class="card-button" onclick="selectCard('Capital One')">Capital One</button>
                <button class="card-button" onclick="selectCard('Chase')">Chase</button>
                <button class="card-button" onclick="selectCard('Citi')">Citi</button>
                <button class="card-button" onclick="selectCard('Wells Fargo')">Wells Fargo</button>
            </div>
        </div>

        <div id="searchContainer" class="search-container" style="display: none;">
            <input type="text" id="searchInput" class="search-input" placeholder="Search airlines..." onkeyup="filterTable()">
            <span class="search-icon">🔍</span>
        </div>

        <div id="stats" class="stats" style="display: none;">
            <div class="stat-item">
                <div class="stat-value" id="partnerCount">0</div>
                <div class="stat-label">Partners</div>
            </div>
        </div>

        <div id="results" style="display: none;">
            <div class="table-container">
                <table id="transferTable">
                    <thead>
                        <tr>
                            <th>Airline Partner</th>
                            <th>Transfer Ratio</th>
                            <th>Transfer Time</th>
                            <th>Min. Transfer</th>
                        </tr>
                    </thead>
                    <tbody id="tableBody"></tbody>
                </table>
            </div>
        </div>

        <div id="emptyState" class="empty-state">
            <p>👆 Select a credit card to view transfer partners</p>
        </div>
    </div>

    <script>
        const transferData = [
            { card: "American Express", partner: "Aer Lingus", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
            { card: "American Express", partner: "Aeromexico", ratio: "1:1.6", time: "Up to 7 days", minAmount: 1000, minIncrement: 1000 },
            { card: "American Express", partner: "Air Canada", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
            { card: "American Express", partner: "Air France/KLM", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
            { card: "American Express", partner: "Alaska Airlines", ratio: "1:1 via Hawaiian Airlines", time: "up to 2 hours", minAmount: 1000, minIncrement: 1000 },
            { card: "American Express", partner: "All Nippon Airways", ratio: "1:1", time: "2-3 days", minAmount: 1000, minIncrement: 1000 },
            { card: "American Express", partner: "Avianca", ratio: "1:1", time: "Up to 1 hr", minAmount: 1000, minIncrement: 1000 },
            { card: "American Express", partner: "British Airways", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
            { card: "American Express", partner: "Cathay Pacific", ratio: "1:1", time: "48+ hrs", minAmount: 1000, minIncrement: 1000 },
            { card: "American Express", partner: "Delta", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
            { card: "American Express", partner: "Emirates", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
            { card: "American Express", partner: "Etihad", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
            { card: "American Express", partner: "Finnair", ratio: "1:1 via British Airways", time: "Instant", minAmount: 1000, minIncrement: 1000 },
            { card: "American Express", partner: "Hawaiian Air", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
            { card: "American Express", partner: "Iberia", ratio: "1:1", time: "1-3 days", minAmount: 1000, minIncrement: 1000 },
            { card: "American Express", partner: "JetBlue", ratio: "2.5:2", time: "Instant", minAmount: 250, minIncrement: 250 },
            { card: "American Express", partner: "Qantas", ratio: "1:1", time: "Instant", minAmount: 500, minIncrement: 500 },
            { card: "American Express", partner: "Qatar Airways", ratio: "1:1", time: "48+ hrs", minAmount: 1000, minIncrement: 1000 },
            { card: "American Express", partner: "Singapore Airlines", ratio: "1:1", time: "Up to 24 hours", minAmount: 1000, minIncrement: 1000 },
            { card: "American Express", partner: "Virgin Atlantic", ratio: "1:1", time: "Up to 48 hours", minAmount: 1000, minIncrement: 1000 },

            { card: "Bilt", partner: "Aer Lingus", ratio: "1:1", time: "N/A", minAmount: "1,000 (Elite status), 2,000 (Blue Status)", minIncrement: 1000 },
            { card: "Bilt", partner: "Air Canada", ratio: "1:1", time: "Instant", minAmount: "1,000 (Elite status), 2,000 (Blue Status)", minIncrement: 1000 },
            { card: "Bilt", partner: "Air France/KLM", ratio: "1:1", time: "Instant", minAmount: "1,000 (Elite status), 2,000 (Blue Status)", minIncrement: 1000 },
            { card: "Bilt", partner: "Alaska Airlines", ratio: "1:1", time: "Instant", minAmount: "1,000 (Elite status), 2,000 (Blue Status)", minIncrement: 1000 },
            { card: "Bilt", partner: "Avianca", ratio: "1:1", time: "Instant", minAmount: "1,000 (Elite status), 2,000 (Blue Status)", minIncrement: 1000 },
            { card: "Bilt", partner: "British Airways", ratio: "1:1", time: "Instant", minAmount: "1,000 (Elite status), 2,000 (Blue Status)", minIncrement: 1000 },
            { card: "Bilt", partner: "Cathay Pacific", ratio: "1:1", time: "Instant", minAmount: "1,000 (Elite status), 2,000 (Blue Status)", minIncrement: 1000 },
            { card: "Bilt", partner: "Emirates", ratio: "1:1", time: "Instant", minAmount: "1,000 (Elite status), 2,000 (Blue Status)", minIncrement: 1000 },
            { card: "Bilt", partner: "Finnair", ratio: "1:1 via British Airways", time: "Instant", minAmount: "1,000 (Elite status), 2,000 (Blue Status)", minIncrement: 1000 },
            { card: "Bilt", partner: "Hawaiian Air", ratio: "1:1", time: "Instant", minAmount: "1,000 (Elite status), 2,000 (Blue Status)", minIncrement: 1000 },
            { card: "Bilt", partner: "Iberia", ratio: "1:1", time: "Instant", minAmount: "1,000 (Elite status), 2,000 (Blue Status)", minIncrement: 1000 },
            { card: "Bilt", partner: "Qatar Airways", ratio: "1:1 via British Airways", time: "Instant", minAmount: "1,000 (Elite status), 2,000 (Blue Status)", minIncrement: 1000 },
            { card: "Bilt", partner: "Turkish Airlines", ratio: "1:1", time: "Instant", minAmount: "1,000 (Elite status), 2,000 (Blue Status)", minIncrement: 1000 },
            { card: "Bilt", partner: "United Airlines", ratio: "1:1", time: "Instant", minAmount: "1,000 (Elite status), 2,000 (Blue Status)", minIncrement: 1000 },
            { card: "Bilt", partner: "Virgin Atlantic", ratio: "1:1", time: "Instant", minAmount: "1,000 (Elite status), 2,000 (Blue Status)", minIncrement: 1000 },

            { card: "Capital One", partner: "Aer Lingus", ratio: "1:1 via British Airways", time: "Instant", minAmount: 1000, minIncrement: 100 },
            { card: "Capital One", partner: "Aeromexico", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 100 },
            { card: "Capital One", partner: "Air Canada", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 100 },
            { card: "Capital One", partner: "Air France/KLM", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 100 },
            { card: "Capital One", partner: "Avianca", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 100 },
            { card: "Capital One", partner: "British Airways", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 100 },
            { card: "Capital One", partner: "Cathay Pacific", ratio: "1:1", time: "24-36 hrs", minAmount: 1000, minIncrement: 100 },
            { card: "Capital One", partner: "Emirates", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 100 },
            { card: "Capital One", partner: "Etihad", ratio: "1:1", time: "Up to 36 hrs", minAmount: 1000, minIncrement: 100 },
            { card: "Capital One", partner: "EVA AIR", ratio: "2:1.5", time: "Instant", minAmount: 1000, minIncrement: 100 },
            { card: "Capital One", partner: "Finnair", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 100 },
            { card: "Capital One", partner: "Iberia", ratio: "1:1 via British Airways", time: "Instant", minAmount: 1000, minIncrement: 100 },
            { card: "Capital One", partner: "Japan Airlines", ratio: "2:1.5", time: "Instant", minAmount: 1000, minIncrement: 100 },
            { card: "Capital One", partner: "Qantas", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 100 },
            { card: "Capital One", partner: "Qatar Airways", ratio: "1:1 via British Airways", time: "Instant", minAmount: 1000, minIncrement: 100 },
            { card: "Capital One", partner: "Singapore Airlines", ratio: "1:1", time: "Up to 48 hours", minAmount: 1000, minIncrement: 100 },
            { card: "Capital One", partner: "TAP Air Portugal", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 100 },
            { card: "Capital One", partner: "Turkish Airlines", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 100 },
            { card: "Capital One", partner: "Virgin Atlantic", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 100 },

            { card: "Chase", partner: "Aer Lingus", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
            { card: "Chase", partner: "Air Canada", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
            { card: "Chase", partner: "Air France/KLM", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
            { card: "Chase", partner: "British Airways", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
            { card: "Chase", partner: "Emirates", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
            { card: "Chase", partner: "Finnair", ratio: "1:1 via British Airways", time: "Instant", minAmount: 1000, minIncrement: 1000 },
            { card: "Chase", partner: "Iberia", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
            { card: "Chase", partner: "JetBlue", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
            { card: "Chase", partner: "Qatar Airways", ratio: "1:1 via British Airways", time: "Instant", minAmount: 1000, minIncrement: 1000 },
            { card: "Chase", partner: "Singapore Airlines", ratio: "1:1", time: "1-2 days", minAmount: 1000, minIncrement: 1000 },
            { card: "Chase", partner: "Southwest", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
            { card: "Chase", partner: "United Airlines", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
            { card: "Chase", partner: "Virgin Atlantic", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },

            { card: "Citi", partner: "Aer Lingus", ratio: "1:1 via Qatar, British Airways", time: "Instant", minAmount: 1000, minIncrement: 1000 },
            { card: "Citi", partner: "Aeromexico", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
            { card: "Citi", partner: "American Airlines", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
            { card: "Citi", partner: "Air France/KLM", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
            { card: "Citi", partner: "Avianca", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
            { card: "Citi", partner: "British Airways", ratio: "1:1 via Qatar", time: "Instant", minAmount: 1000, minIncrement: 1000 },
            { card: "Citi", partner: "Cathay Pacific", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
            { card: "Citi", partner: "Emirates", ratio: "1:0.8", time: "Instant", minAmount: 1000, minIncrement: 1000 },
            { card: "Citi", partner: "Etihad", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
            { card: "Citi", partner: "EVA AIR", ratio: "1:1", time: "1-2 days", minAmount: 1000, minIncrement: 1000 },
            { card: "Citi", partner: "Finnair", ratio: "1:1 via Qatar, British Airways", time: "Instant", minAmount: 1000, minIncrement: 1000 },
            { card: "Citi", partner: "Iberia", ratio: "1:1 via Qatar, British Airways", time: "Instant", minAmount: 1000, minIncrement: 1000 },
            { card: "Citi", partner: "JetBlue", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
            { card: "Citi", partner: "Qantas", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
            { card: "Citi", partner: "Qatar Airways", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
            { card: "Citi", partner: "Singapore Airlines", ratio: "1:1", time: "24-36 hrs", minAmount: 1000, minIncrement: 1000 },
            { card: "Citi", partner: "Thai Airways", ratio: "1:1", time: "7 days", minAmount: 1000, minIncrement: 1000 },
            { card: "Citi", partner: "Turkish Airlines", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
            { card: "Citi", partner: "Virgin Atlantic", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },

            { card: "Wells Fargo", partner: "Aer Lingus", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
            { card: "Wells Fargo", partner: "Air France/KLM", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
            { card: "Wells Fargo", partner: "Avianca", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
            { card: "Wells Fargo", partner: "British Airways", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
            { card: "Wells Fargo", partner: "Finnair", ratio: "1:1 via British Airways", time: "Instant", minAmount: 1000, minIncrement: 1000 },
            { card: "Wells Fargo", partner: "Iberia", ratio: "1:1", time: "N/A", minAmount: 1000, minIncrement: 1000 },
            { card: "Wells Fargo", partner: "Qatar Airways", ratio: "1:1 via British Airways", time: "Instant", minAmount: 1000, minIncrement: 1000 },
            { card: "Wells Fargo", partner: "Virgin Atlantic", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 }
        ];

        let currentCard = '';

        function selectCard(card) {
            currentCard = card;
            
            const buttons = document.querySelectorAll('.card-button');
            buttons.forEach(btn => {
                if (btn.textContent === card || 
                    (card === 'American Express' && btn.textContent === 'Amex')) {
                    btn.classList.add('selected');
                } else {
                    btn.classList.remove('selected');
                }
            });

            document.getElementById('searchContainer').style.display = 'block';
            document.getElementById('stats').style.display = 'flex';
            document.getElementById('results').style.display = 'block';
            document.getElementById('emptyState').style.display = 'none';
            
            document.getElementById('searchInput').value = '';
            loadTableData(card);
        }

        function loadTableData(card) {
            const filteredData = transferData.filter(item => item.card === card);
            const tbody = document.getElementById('tableBody');
            tbody.innerHTML = '';

            const existingNote = document.getElementById('capital-note');
            if (existingNote) {
                existingNote.remove();
            }
            
            if (card === 'Capital One') {
                const searchContainer = document.getElementById('searchContainer');
                const note = document.createElement('div');
                note.id = 'capital-note';
                note.style.cssText = 'margin-bottom: 20px; padding: 15px; background: #FFFBED; border-radius: 10px; font-size: 14px; color: #004449; border: 1px solid #004449;';
                note.innerHTML = '<strong>Flexible transfers:</strong> While most cards require 1,000-point chunks, Capital One lets you transfer in increments as small as 100 points, after the first 1,000 points transfer. This means you can transfer exactly what you need without leaving orphaned points behind.';
                searchContainer.parentNode.insertBefore(note, searchContainer);
            }

            filteredData.forEach(item => {
                const row = tbody.insertRow();
                
                row.insertCell(0).textContent = item.partner;
                
                const ratioCell = row.insertCell(1);
                const ratioParts = item.ratio.split(' ');
                if (ratioParts.length > 1 && item.ratio.includes('via')) {
                    ratioCell.innerHTML = `<span class="ratio-main">${ratioParts[0]}</span><span class="ratio-note">${ratioParts.slice(1).join(' ')}</span>`;
                } else {
                    ratioCell.innerHTML = `<span class="ratio-main">${item.ratio}</span>`;
                }
                
                const timeCell = row.insertCell(2);
                const timeLower = item.time.toLowerCase();
                if (timeLower === 'instant' || timeLower.includes('instant')) {
                    timeCell.innerHTML = '<span class="instant-badge">Instant</span>';
                } else {
                    timeCell.innerHTML = `<span class="slow-badge">${item.time}</span>`;
                }
                
                const minCell = row.insertCell(3);
                if (typeof item.minAmount === 'string' && item.minAmount.includes('(')) {
                    minCell.innerHTML = `${item.minAmount}`;
                } else {
                    minCell.textContent = item.minAmount.toLocaleString();
                }
            });

            document.getElementById('partnerCount').textContent = filteredData.length;
        }

        function filterTable() {
            const input = document.getElementById('searchInput');
            const filter = input.value.toUpperCase();
            const table = document.getElementById('transferTable');
            const tr = table.getElementsByTagName('tr');

            for (let i = 1; i < tr.length; i++) {
                const partnerTd = tr[i].getElementsByTagName('td')[0];
                if (partnerTd) {
                    const txtValue = partnerTd.textContent || partnerTd.innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = '';
                    } else {
                        tr[i].style.display = 'none';
                    }
                }
            }
        }
    </script>
</body>
</html>
