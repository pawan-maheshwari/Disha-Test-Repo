const KEY = "disha_home_country";

export const META = {
  "India":        { hi: "भारत", flag: "🇮🇳", region: "state", regionHi: "राज्य", adjEn: "Indian" },
  "Nepal":        { hi: "नेपाल", flag: "🇳🇵", region: "province", regionHi: "प्रदेश", adjEn: "Nepali" },
  "UAE":          { hi: "यूएई", flag: "🇦🇪", region: "emirate", regionHi: "अमीरात", adjEn: "UAE" },
  "South Africa": { hi: "दक्षिण अफ़्रीका", flag: "🇿🇦", region: "province", regionHi: "प्रांत", adjEn: "South African" }
};

export const PRICING = {
  "India":        { sym: "₹", full: 999, promo: 199 },
  "Nepal":        { sym: "NPR ", full: 1499, promo: 299 },
  "UAE":          { sym: "AED ", full: 649, promo: 129 },
  "South Africa": { sym: "R ", full: 849, promo: 169 }
};

export function getHomeCountry() {
  return localStorage.getItem(KEY) || "India";
}

export function setHomeCountry(c) {
  if (META[c]) {
    localStorage.setItem(KEY, c);
    window.location.reload();
  }
}

export function getPricing() {
  const c = getHomeCountry();
  return PRICING[c] || PRICING["India"];
}
