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
  }
};

// Group data (mapping airports to groups)
const airportGroups = {
  groupOne: ['ATL', 'BOS', 'DFW', 'DTW', 'EWR', 'IAD', 'IAH', 'JFK', 'LAX', 'LGA', 'MIA', 'ORD', 'SFO'],
  groupTwo: ['AUS', 'CLT', 'CLE', 'CVG', 'DEN', 'LAS', 'MCO', 'MSP', 'PDX', 'PHL', 'PHX', 'RDU', 'SAN', 'SEA', 'SLC', 'TPA'],
  groupThree: ['BHM', 'BNA', 'BUR', 'BWI', 'CHA', 'DAL', 'DCA', 'FLL', 'GSP', 'HOU', 'IND', 'LGB', 'MCI', 'MDW', 'MKE', 'OAK', 'ONT', 'SAT', 'SJC', 'SMF', 'SNA']
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
      <h1>Flight Deal Checker</h1>
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
      <input type="number" value={points} onChange={(e) => setPoints(parseInt(e.target.value, 10))} />
    </div>
    <div>
      <label>Tax:</label>
      <input type="number" value={tax} onChange={(e) => setTax(parseFloat(e.target.value))} />
    </div>
    <button onClick={handleCheckDeal}>Check Deal</button>
    <div>
      <h2>{result}</h2>
    </div>
  </div>
  );
}