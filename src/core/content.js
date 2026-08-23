export const CONTENT = {
  interest: [
    { dim: 0, topic: "body-science",
      q: { en: "A doctor explains how the heart pumps blood. What do you do next?", hi: "एक डॉक्टर बताता है कि हृदय रक्त कैसे पंप करता है। आप आगे क्या करेंगे?" },
      opts: [
        { en: "Look up how the valves work", hi: "जानें कि वाल्व कैसे काम करते हैं", tag: { I: 2 }, sub: { bio: 2, med: 2 } },
        { en: "Ask how to keep hearts healthy", hi: "पूछें कि हृदय स्वस्थ कैसे रखें", tag: { S: 2 }, sub: { med: 1, allied: 2 } },
        { en: "Wonder how a pump could be built", hi: "सोचें कि ऐसा पंप कैसे बनाया जाए", tag: { P: 2 }, sub: { eng: 2 } }
      ]
    },
    { dim: 0, topic: "numbers-play",
      q: { en: "Which of these would you finish for fun?", hi: "इनमें से क्या आप शौक़ से पूरा करेंगे?" },
      opts: [
        { en: "A hard maths puzzle", hi: "एक कठिन गणित पहेली", tag: { I: 2 }, sub: { math: 3, eng: 1 } },
        { en: "Tracking money in a sheet", hi: "एक शीट में जेब-ख़र्च का हिसाब", tag: { O: 2 }, sub: { com: 3 } }
      ]
    }
  ],
  paths: {
    med: { label: { en: "Healthcare & Medicine", hi: "स्वास्थ्य और चिकित्सा" }, stream: "Science with Biology (PCB)" },
    eng: { label: { en: "Engineering & Technology", hi: "इंजीनियरिंग और प्रौद्योगिकी" }, stream: "Science with Maths (PCM)" },
    com: { label: { en: "Commerce & Finance", hi: "वाणिज्य और वित्त" }, stream: "Commerce" }
  }
};
