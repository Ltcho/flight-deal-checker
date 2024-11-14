import { useState } from 'react';

// Flight data (based strictly on Excel data)
const flightData = {
  groupOne: {
    regions: {
      Europe: {
        Economy: { maxPoints: 50000, maxTax: 300 },
        "Premium Economy": { maxPoints: 80000, maxTax: 600 },
        Business: { maxPoints: 130000, maxTax: 600 },
        First: { maxPoints: 160000, maxTax: 600 }
      },
      "Southern America": {
        Economy: { maxPoints: 60000, maxTax: 300 },
        "Premium Economy": { maxPoints: 150000, maxTax: 600 },
        Business: { maxPoints: 200000, maxTax: 600 },
        First: { maxPoints: 240000, maxTax: 600 }
      },
      Asia: {
        Economy: { maxPoints: 90000, maxTax: 300 },
        "Premium Economy": { maxPoints: 150000, maxTax: 600 },
        Business: { maxPoints: 200000, maxTax: 600 },
        First: { maxPoints: 240000, maxTax: 600 }
      },
      Africa: {
        Economy: { maxPoints: 80000, maxTax: 300 },
        "Premium Economy": { maxPoints: 150000, maxTax: 600 },
        Business: { maxPoints: 200000, maxTax: 600 },
        First: { maxPoints: 240000, maxTax: 600 }
      },
      Oceania: {
        Economy: { maxPoints: 90000, maxTax: 300 },
        "Premium Economy": { maxPoints: 150000, maxTax: 600 },
        Business: { maxPoints: 200000, maxTax: 600 },
        First: { maxPoints: 240000, maxTax: 600 }
      }
    }
  },
  groupTwo: {
    regions: {
      Europe: {
        Economy: { maxPoints: 70000, maxTax: 300 },
        "Premium Economy": { maxPoints: 80000, maxTax: 600 },
        Business: { maxPoints: 140000, maxTax: 600 },
        First: { maxPoints: 160000, maxTax: 600 }
      },
      "Southern America": {
        Economy: { maxPoints: 80000, maxTax: 300 },
        "Premium Economy": { maxPoints: 150000, maxTax: 600 },
        Business: { maxPoints: 200000, maxTax: 600 },
        First: { maxPoints: 240000, maxTax: 600 }
      },
      Asia: {
        Economy: { maxPoints: 100000, maxTax: 300 },
        "Premium Economy": { maxPoints: 150000, maxTax: 600 },
        Business: { maxPoints: 200000, maxTax: 600 },
        First: { maxPoints: 240000, maxTax: 600 }
      },
      Africa: {
        Economy: { maxPoints: 90000, maxTax: 300 },
        "Premium Economy": { maxPoints: 150000, maxTax: 600 },
        Business: { maxPoints: 200000, maxTax: 600 },
        First: { maxPoints: 240000, maxTax: 600 }
      },
      Oceania: {
        Economy: { maxPoints: 100000, maxTax: 300 },
        "Premium Economy": { maxPoints: 150000, maxTax: 600 },
        Business: { maxPoints: 200000, maxTax: 600 },
        First: { maxPoints: 240000, maxTax: 600 }
      }
    }
  },
  groupThree: {
    regions: {
      Europe: {
        Economy: { maxPoints: 70000, maxTax: 300 },
        "Premium Economy": { maxPoints: 80000, maxTax: 600 },
        Business: { maxPoints: 140000, maxTax: 600 },
        First: { maxPoints: 160000, maxTax: 600 }
      },
      "Southern America": {
        Economy: { maxPoints: 90000, maxTax: 300 },
        "Premium Economy": { maxPoints: 150000, maxTax: 600 },
        Business: { maxPoints: 200000, maxTax: 600 },
        First: { maxPoints: 240000, maxTax: 600 }
      },
      Asia: {
        Economy: { maxPoints: 100000, maxTax: 300 },
        "Premium Economy": { maxPoints: 150000, maxTax: 600 },
        Business: { maxPoints: 200000, maxTax: 600 },
        First: { maxPoints: 240000, maxTax: 600 }
      },
      Africa: {
        Economy: { maxPoints: 90000, maxTax: 300 },
        "Premium Economy": { maxPoints: 150000, maxTax: 600 },
        Business: { maxPoints: 200000, maxTax: 600 },
        First: { maxPoints: 240000, maxTax: 600 }
      },
      Oceania: {
        Economy: { maxPoints: 100000, maxTax: 300 },
        "Premium Economy": { maxPoints: 150000, maxTax: 600 },
        Business: { maxPoints: 200000, maxTax: 600 },
        First: { maxPoints: 240000, maxTax: 600 }
      }
    }
  },
  groupFour: {
    regions: {
      Europe: {
        Economy: { maxPoints: 80000, maxTax: 300 },
        "Premium Economy": { maxPoints: 96000, maxTax: 600 },
        Business: { maxPoints: 168000, maxTax: 600 },
        First: { maxPoints: 192000, maxTax: 600 }
      },
      "Southern America": {
        Economy: { maxPoints: 100000, maxTax: 300 },
        "Premium Economy": { maxPoints: 180000, maxTax: 600 },
        Business: { maxPoints: 240000, maxTax: 600 },
        First: { maxPoints: 288000, maxTax: 600 }
      },
      Asia: {
        Economy: { maxPoints: 120000, maxTax: 300 },
        "Premium Economy": { maxPoints: 180000, maxTax: 600 },
        Business: { maxPoints: 240000, maxTax: 600 },
        First: { maxPoints: 288000, maxTax: 600 }
      },
      Africa: {
        Economy: { maxPoints: 108000, maxTax: 300 },
        "Premium Economy": { maxPoints: 180000, maxTax: 600 },
        Business: { maxPoints: 240000, maxTax: 600 },
        First: { maxPoints: 288000, maxTax: 600 }
      },
      Oceania: {
        Economy: { maxPoints: 120000, maxTax: 300 },
        "Premium Economy": { maxPoints: 180000, maxTax: 600 },
        Business: { maxPoints: 250000, maxTax: 600 },
        First: { maxPoints: 288000, maxTax: 600 }
      }
    }
  }
};

// Group data (mapping airports to groups)
const airportGroups = {
  groupOne: ['ATL', 'BOS', 'DFW', 'DTW', 'EWR', 'IAD', 'IAH', 'JFK', 'LAX', 'LGA', 'MIA', 'ORD', 'SFO'],
  groupTwo: ['AUS', 'CLT', 'CLE', 'CVG', 'DEN', 'LAS', 'MCO', 'MSP', 'PDX', 'PHL', 'PHX', 'RDU', 'SAN', 'SEA', 'SLC', 'TPA'],
  groupThree: ['BHM', 'BNA', 'BUR', 'BWI', 'CHA', 'DAL', 'DCA', 'FLL', 'GSP', 'HOU', 'IND', 'LGB', 'MCI', 'MDW', 'MKE', 'OAK', 'ONT', 'SAT', 'SJC', 'SMF', 'SNA'],
  groupFour: ['ABE', 'ABQ', 'AGS', 'ALB', 'AMA', 'ANC', 'ASE', 'ATW', 'AVL', 'BDL', 'BIL', 'BLI', 'BMI', 'BOI', 'BTV', 'BUF', 'BZN', 'CAE', 'CAK', 'CHO', 'CHS', 'CID', 'CMH', 'CMI', 'COD', 'COS', 'CRP', 'CRW', 'CYS', 'DAB', 'DAY', 'DLH', 'DRO', 'DSM', 'ECP', 'EGE', 'ELP', 'EUG', 'EVV', 'EWN', 'EYW', 'FAR', 'FAT', 'FAY', 'FCA', 'FSD', 'FWA', 'GEG', 'GJT', 'GPT', 'GRB', 'GRR', 'GSO', 'GTF', 'GUM', 'HHH', 'HNL', 'HPN', 'HSV', 'HVN', 'ICT', 'ILM', 'ISP', 'ITO', 'JAC', 'JAN', 'JAX', 'JNU', 'KOA', 'LEX', 'LIH', 'LIT', 'LNK', 'LYH', 'MDT', 'MEM', 'MFE', 'MFR', 'MHT', 'MLB', 'MLI', 'MOB', 'MOT', 'MQT', 'MSN', 'MSO', 'MSY', 'MTJ', 'MYR', 'OAJ', 'OGG', 'OKC', 'OMA', 'ORF', 'ORH', 'PAE', 'PBI', 'PIA', 'PIT', 'PNS', 'PSC', 'PSP', 'PVD', 'PVU', 'PWM', 'RAP', 'RDM', 'RIC', 'RNO', 'ROA', 'ROC', 'RST', 'RSW', 'SAF', 'SAV', 'SBA', 'SBN', 'SDF', 'SFB', 'SGF', 'SHV', 'SJU', 'SRQ', 'STL', 'STS', 'STT', 'SUN', 'SWF', 'SYR', 'TLH', 'TUL', 'TUS', 'TWF', 'TYS', 'VPS', 'XNA', 'YUM']
};

export default function Home() {
  const [airport, setAirport] = useState('');
  const [region, setRegion] = useState('Europe');
  const [fareClass, setFareClass] = useState('Economy');
  const [points, setPoints] = useState(0);
  const [tax, setTax] = useState(0);
  const [result, setResult] = useState('');

  const handleCheckDeal = () => {
    let group = '';
    // Determine airport group
    if (airportGroups.groupOne.includes(airport)) {
      group = 'groupOne';
    } else if (airportGroups.groupTwo.includes(airport)) {
      group = 'groupTwo';
    } else if (airportGroups.groupThree.includes(airport)) {
      group = 'groupThree';
    } else if (airportGroups.groupFour.includes(airport)) { // Add this check
      group = 'groupFour';
    }

    // If airport, region, or fare class is invalid
    if (!group || !flightData[group].regions[region] || !flightData[group].regions[region][fareClass]) {
      setResult('Invalid airport, region, or fare class.');
      return;
    }

    // Get max points and tax for the group, region, and fare class
    const maxPoints = flightData[group].regions[region][fareClass].maxPoints;
    const maxTax = flightData[group].regions[region][fareClass].maxTax;

    // Check if it's a good deal
    if (points <= maxPoints && tax <= maxTax) {
      setResult('This is a good deal!');
    } else {
      setResult('This is not a good deal.');
    }
  };

  return (
    <div>
      <h1>Enter roundtrip award rate and tax to check if it's a good deal</h1>
      <div>
        <label>Airport:</label>
        <input type="text" value={airport} onChange={(e) => setAirport(e.target.value.toUpperCase())} />
      </div>
      <div>
        <label>Region:</label>
        <select value={region} onChange={(e) => setRegion(e.target.value)}>
          <option value="Europe">Europe</option>
          <option value="Southern America">Southern America</option>
          <option value="Asia">Asia</option>
          <option value="Africa">Africa</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      <div>
        <label>Fare Class:</label>
        <select value={fareClass} onChange={(e) => setFareClass(e.target.value)}>
          <option value="Economy">Economy</option>
          <option value="Premium Economy">Premium Economy</option>
          <option value="Business">Business</option>
        <option value="First">First</option>
      </select>
    </div>
    <div>
      <label>Points:</label>
      <input
  type="number"
  value={points === 0 ? '' : points}
  onChange={(e) => setPoints(e.target.value === '' ? 0 : parseInt(e.target.value, 10))}
  placeholder="0"
/>    </div>
    <div>
      <label>Tax:</label>
      <input
  type="number"
  value={tax === 0 ? '' : tax}
  onChange={(e) => setTax(e.target.value === '' ? 0 : parseFloat(e.target.value))}
  placeholder="0"
/>    </div>
<button className="check-deal-button" onClick={handleCheckDeal}>Check Deal</button>
    <div>
      <h2>{result}</h2>
    </div>
  </div>
  );
}