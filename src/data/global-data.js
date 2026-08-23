export const globalData = {
  "India": {
    colleges: [
      { name: "IIT Bombay", location: "Mumbai, Maharashtra", url: "https://www.iitb.ac.in", entry: "JEE Advanced" },
      { name: "AIIMS New Delhi", location: "New Delhi", url: "https://www.aiims.edu", entry: "NEET-UG" },
      { name: "IIM Ahmedabad", location: "Ahmedabad, Gujarat", url: "https://www.iima.ac.in", entry: "CAT" }
    ],
    cutoffs: [
      { inst: "IIT Bombay (CSE)", unit: "Closing Rank", series: [65, 62, 60, 61, 63] },
      { inst: "AIIMS Delhi (MBBS)", unit: "Closing Rank", series: [55, 52, 50, 53, 50] }
    ]
  },
  "Nepal": {
    colleges: [
      { name: "Tribhuvan University (TU)", location: "Kathmandu", url: "https://tu.edu.np", entry: "TU Entrance" },
      { name: "IOE Pulchowk Campus", location: "Lalitpur", url: "https://pcampus.edu.np", entry: "IOE Rank" }
    ],
    cutoffs: [
      { inst: "IOE Pulchowk (Computer Engg)", unit: "Rank", series: [120, 115, 110, 105, 82] }
    ]
  },
  "UAE": {
    colleges: [
      { name: "Khalifa University", location: "Abu Dhabi", url: "https://www.ku.ac.ae", entry: "EmSAT" },
      { name: "UAE University", location: "Al Ain", url: "https://www.uaeu.ac.ae", entry: "High School %" }
    ],
    cutoffs: [
      { inst: "Khalifa Univ (Engineering)", unit: "EmSAT Score", series: [1100, 1150, 1200, 1325] }
    ]
  },
  "South Africa": {
    colleges: [
      { name: "University of Cape Town (UCT)", location: "Cape Town", url: "https://www.uct.ac.za", entry: "APS / NBT" },
      { name: "Wits University", location: "Johannesburg", url: "https://www.wits.ac.za", entry: "APS" }
    ],
    cutoffs: [
      { inst: "UCT (Engineering)", unit: "Min APS", series: [40, 41, 42, 43, 45] }
    ]
  }
};
