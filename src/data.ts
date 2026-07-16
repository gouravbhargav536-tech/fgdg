import { Team, Match, StandingsRow, NewsArticle, HighlightVideo } from './types';

export const TEAMS: Team[] = [
  // Men's Teams
  {
    id: 'm1',
    name: 'Jaipur Panthers',
    city: 'Jaipur',
    shortName: 'JAI',
    logoColor: 'from-pink-600 to-rose-800',
    category: 'Men',
    founded: 2021,
    homeGround: 'University of Rajasthan Grounds',
    coach: 'Ramesh Singh'
  },
  {
    id: 'm2',
    name: 'Rajasthan Royals SH',
    city: 'Jodhpur',
    shortName: 'RAJ',
    logoColor: 'from-blue-500 to-indigo-700',
    category: 'Men',
    founded: 2021,
    homeGround: 'Barkatullah Khan Stadium (Soft Hockey Turf)',
    coach: 'Harshit Yadav'
  },
  {
    id: 'm3',
    name: 'Delhi Defenders',
    city: 'New Delhi',
    shortName: 'DEL',
    logoColor: 'from-red-600 to-red-800',
    category: 'Men',
    founded: 2022,
    homeGround: 'National Stadium Complex',
    coach: 'Sandeep Singh'
  },
  {
    id: 'm4',
    name: 'Mumbai Mavericks',
    city: 'Mumbai',
    shortName: 'MUM',
    logoColor: 'from-sky-500 to-blue-800',
    category: 'Men',
    founded: 2022,
    homeGround: 'Mumbai University Grounds',
    coach: 'Viren Rasquinha'
  },
  {
    id: 'm5',
    name: 'Punjab Warriors',
    city: 'Chandigarh',
    shortName: 'PUN',
    logoColor: 'from-yellow-400 to-amber-600',
    category: 'Men',
    founded: 2023,
    homeGround: 'Sector 42 Stadium (Soft Hockey Arena)',
    coach: 'Rajpal Singh'
  },
  {
    id: 'm6',
    name: 'Chennai Challengers',
    city: 'Chennai',
    shortName: 'CHE',
    logoColor: 'from-yellow-500 to-orange-700',
    category: 'Men',
    founded: 2023,
    homeGround: 'SDAT Stadium',
    coach: 'Bhaskaran'
  },
  // Women's Teams
  {
    id: 'w1',
    name: 'Jaipur Queens',
    city: 'Jaipur',
    shortName: 'JAQ',
    logoColor: 'from-pink-500 to-fuchsia-700',
    category: 'Women',
    founded: 2021,
    homeGround: 'University of Rajasthan Grounds',
    coach: 'Pritam Rani'
  },
  {
    id: 'w2',
    name: 'Rajasthan Rangers',
    city: 'Udaipur',
    shortName: 'RJR',
    logoColor: 'from-emerald-500 to-teal-700',
    category: 'Women',
    founded: 2021,
    homeGround: 'Maharana Pratap Khel Gaon',
    coach: 'Sita Sharma'
  },
  {
    id: 'w3',
    name: 'Delhi Divas',
    city: 'New Delhi',
    shortName: 'DLD',
    logoColor: 'from-purple-600 to-indigo-800',
    category: 'Women',
    founded: 2022,
    homeGround: 'National Stadium Complex',
    coach: 'Mamta Kharab'
  },
  {
    id: 'w4',
    name: 'Mumbai Mystics',
    city: 'Mumbai',
    shortName: 'MUM',
    logoColor: 'from-cyan-500 to-blue-600',
    category: 'Women',
    founded: 2022,
    homeGround: 'Mumbai University Grounds',
    coach: 'Saba Anjum'
  },
  {
    id: 'w5',
    name: 'Punjab Princesses',
    city: 'Jalandhar',
    shortName: 'PJP',
    logoColor: 'from-amber-400 to-orange-600',
    category: 'Women',
    founded: 2023,
    homeGround: 'Surjit Hockey Stadium (Soft Arena)',
    coach: 'Rajni Bala'
  },
  {
    id: 'w6',
    name: 'Chennai Charmers',
    city: 'Chennai',
    shortName: 'CHC',
    logoColor: 'from-yellow-300 to-yellow-500',
    category: 'Women',
    founded: 2023,
    homeGround: 'SDAT Stadium',
    coach: 'Helen Mary'
  }
];

export const MATCHES: Match[] = [
  // Live / Active Simulation matches
  {
    id: 'match-live-men',
    teamAId: 'm1',
    teamBId: 'm2',
    teamAName: 'Jaipur Panthers',
    teamBName: 'Rajasthan Royals SH',
    teamALogoColor: 'from-pink-600 to-rose-800',
    teamBLogoColor: 'from-blue-500 to-indigo-700',
    scoreA: 2,
    scoreB: 1,
    date: 'Today',
    time: '19:30 IST',
    venue: 'University of Rajasthan Grounds',
    status: 'LIVE',
    minute: 42,
    category: 'Men'
  },
  {
    id: 'match-live-women',
    teamAId: 'w1',
    teamBId: 'w2',
    teamAName: 'Jaipur Queens',
    teamBName: 'Rajasthan Rangers',
    teamALogoColor: 'from-pink-500 to-fuchsia-700',
    teamBLogoColor: 'from-emerald-500 to-teal-700',
    scoreA: 1,
    scoreB: 1,
    date: 'Today',
    time: '17:00 IST',
    venue: 'Maharana Pratap Khel Gaon',
    status: 'LIVE',
    minute: 54,
    category: 'Women'
  },
  // Completed Matches
  {
    id: 'match-comp-1',
    teamAId: 'm3',
    teamBId: 'm4',
    teamAName: 'Delhi Defenders',
    teamBName: 'Mumbai Mavericks',
    teamALogoColor: 'from-red-600 to-red-800',
    teamBLogoColor: 'from-sky-500 to-blue-800',
    scoreA: 4,
    scoreB: 3,
    date: 'Yesterday',
    time: '19:30 IST',
    venue: 'National Stadium Complex',
    status: 'COMPLETED',
    category: 'Men'
  },
  {
    id: 'match-comp-2',
    teamAId: 'w3',
    teamBId: 'w4',
    teamAName: 'Delhi Divas',
    teamBName: 'Mumbai Mystics',
    teamALogoColor: 'from-purple-600 to-indigo-800',
    teamBLogoColor: 'from-cyan-500 to-blue-600',
    scoreA: 2,
    scoreB: 0,
    date: 'Yesterday',
    time: '15:30 IST',
    venue: 'Mumbai University Grounds',
    status: 'COMPLETED',
    category: 'Women'
  },
  {
    id: 'match-comp-3',
    teamAId: 'm5',
    teamBId: 'm6',
    teamAName: 'Punjab Warriors',
    teamBName: 'Chennai Challengers',
    teamALogoColor: 'from-yellow-400 to-amber-600',
    teamBLogoColor: 'from-yellow-500 to-orange-700',
    scoreA: 2,
    scoreB: 2,
    date: '2026-07-10',
    time: '19:30 IST',
    venue: 'Sector 42 Stadium (Soft Hockey Arena)',
    status: 'COMPLETED',
    category: 'Men'
  },
  {
    id: 'match-comp-4',
    teamAId: 'w5',
    teamBId: 'w6',
    teamAName: 'Punjab Princesses',
    teamBName: 'Chennai Charmers',
    teamALogoColor: 'from-amber-400 to-orange-600',
    teamBLogoColor: 'from-yellow-300 to-yellow-500',
    scoreA: 1,
    scoreB: 3,
    date: '2026-07-09',
    time: '17:30 IST',
    venue: 'SDAT Stadium',
    status: 'COMPLETED',
    category: 'Women'
  },
  // Upcoming Matches
  {
    id: 'match-up-1',
    teamAId: 'm2',
    teamBId: 'm5',
    teamAName: 'Rajasthan Royals SH',
    teamBName: 'Punjab Warriors',
    teamALogoColor: 'from-blue-500 to-indigo-700',
    teamBLogoColor: 'from-yellow-400 to-amber-600',
    date: 'Tomorrow',
    time: '19:30 IST',
    venue: 'Barkatullah Khan Stadium',
    status: 'UPCOMING',
    category: 'Men'
  },
  {
    id: 'match-up-2',
    teamAId: 'w2',
    teamBId: 'w5',
    teamAName: 'Rajasthan Rangers',
    teamBName: 'Punjab Princesses',
    teamALogoColor: 'from-emerald-500 to-teal-700',
    teamBLogoColor: 'from-amber-400 to-orange-600',
    date: 'Tomorrow',
    time: '17:00 IST',
    venue: 'Maharana Pratap Khel Gaon',
    status: 'UPCOMING',
    category: 'Women'
  },
  {
    id: 'match-up-3',
    teamAId: 'm4',
    teamBId: 'm1',
    teamAName: 'Mumbai Mavericks',
    teamBName: 'Jaipur Panthers',
    teamALogoColor: 'from-sky-500 to-blue-800',
    teamBLogoColor: 'from-pink-600 to-rose-800',
    date: '2026-07-15',
    time: '19:30 IST',
    venue: 'Mumbai University Grounds',
    status: 'UPCOMING',
    category: 'Men'
  },
  {
    id: 'match-up-4',
    teamAId: 'w4',
    teamBId: 'w1',
    teamAName: 'Mumbai Mystics',
    teamBName: 'Jaipur Queens',
    teamALogoColor: 'from-cyan-500 to-blue-600',
    teamBLogoColor: 'from-pink-500 to-fuchsia-700',
    date: '2026-07-15',
    time: '15:30 IST',
    venue: 'Mumbai University Grounds',
    status: 'UPCOMING',
    category: 'Women'
  }
];

export const STANDINGS_MEN: StandingsRow[] = [
  {
    teamId: 'm3',
    teamName: 'Delhi Defenders',
    shortName: 'DEL',
    logoColor: 'from-red-600 to-red-800',
    played: 5,
    won: 4,
    drawn: 0,
    lost: 1,
    goalsFor: 18,
    goalsAgainst: 12,
    goalDifference: 6,
    points: 12,
    category: 'Men'
  },
  {
    teamId: 'm1',
    teamName: 'Jaipur Panthers',
    shortName: 'JAI',
    logoColor: 'from-pink-600 to-rose-800',
    played: 5,
    won: 3,
    drawn: 1,
    lost: 1,
    goalsFor: 14,
    goalsAgainst: 10,
    goalDifference: 4,
    points: 10,
    category: 'Men'
  },
  {
    teamId: 'm4',
    teamName: 'Mumbai Mavericks',
    shortName: 'MUM',
    logoColor: 'from-sky-500 to-blue-800',
    played: 5,
    won: 2,
    drawn: 1,
    lost: 2,
    goalsFor: 12,
    goalsAgainst: 11,
    goalDifference: 1,
    points: 7,
    category: 'Men'
  },
  {
    teamId: 'm2',
    teamName: 'Rajasthan Royals SH',
    shortName: 'RAJ',
    logoColor: 'from-blue-500 to-indigo-700',
    played: 5,
    won: 2,
    drawn: 0,
    lost: 3,
    goalsFor: 11,
    goalsAgainst: 14,
    goalDifference: -3,
    points: 6,
    category: 'Men'
  },
  {
    teamId: 'm5',
    teamName: 'Punjab Warriors',
    shortName: 'PUN',
    logoColor: 'from-yellow-400 to-amber-600',
    played: 5,
    won: 1,
    drawn: 2,
    lost: 2,
    goalsFor: 10,
    goalsAgainst: 12,
    goalDifference: -2,
    points: 5,
    category: 'Men'
  },
  {
    teamId: 'm6',
    teamName: 'Chennai Challengers',
    shortName: 'CHE',
    logoColor: 'from-yellow-500 to-orange-700',
    played: 5,
    won: 0,
    drawn: 2,
    lost: 3,
    goalsFor: 8,
    goalsAgainst: 14,
    goalDifference: -6,
    points: 2,
    category: 'Men'
  }
];

export const STANDINGS_WOMEN: StandingsRow[] = [
  {
    teamId: 'w3',
    teamName: 'Delhi Divas',
    shortName: 'DLD',
    logoColor: 'from-purple-600 to-indigo-800',
    played: 5,
    won: 4,
    drawn: 1,
    lost: 0,
    goalsFor: 12,
    goalsAgainst: 4,
    goalDifference: 8,
    points: 13,
    category: 'Women'
  },
  {
    teamId: 'w1',
    teamName: 'Jaipur Queens',
    shortName: 'JAQ',
    logoColor: 'from-pink-500 to-fuchsia-700',
    played: 5,
    won: 3,
    drawn: 1,
    lost: 1,
    goalsFor: 10,
    goalsAgainst: 6,
    goalDifference: 4,
    points: 10,
    category: 'Women'
  },
  {
    teamId: 'w6',
    teamName: 'Chennai Charmers',
    shortName: 'CHC',
    logoColor: 'from-yellow-300 to-yellow-500',
    played: 5,
    won: 3,
    drawn: 0,
    lost: 2,
    goalsFor: 11,
    goalsAgainst: 9,
    goalDifference: 2,
    points: 9,
    category: 'Women'
  },
  {
    teamId: 'w2',
    teamName: 'Rajasthan Rangers',
    shortName: 'RJR',
    logoColor: 'from-emerald-500 to-teal-700',
    played: 5,
    won: 2,
    drawn: 1,
    lost: 2,
    goalsFor: 8,
    goalsAgainst: 8,
    goalDifference: 0,
    points: 7,
    category: 'Women'
  },
  {
    teamId: 'w4',
    teamName: 'Mumbai Mystics',
    shortName: 'MUM',
    logoColor: 'from-cyan-500 to-blue-600',
    played: 5,
    won: 1,
    drawn: 1,
    lost: 3,
    goalsFor: 6,
    goalsAgainst: 10,
    goalDifference: -4,
    points: 4,
    category: 'Women'
  },
  {
    teamId: 'w5',
    teamName: 'Punjab Princesses',
    shortName: 'PJP',
    logoColor: 'from-amber-400 to-orange-600',
    played: 5,
    won: 0,
    drawn: 0,
    lost: 5,
    goalsFor: 4,
    goalsAgainst: 14,
    goalDifference: -10,
    points: 0,
    category: 'Women'
  }
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'news-ashutosh-president',
    title: 'आशुतोष बने इंडियन सॉफ्ट हॉकी फेडरेशन के राष्ट्रीय अध्यक्ष',
    excerpt: 'राजस्थान के आशुतोष को सर्वसम्मति से इंडियन सॉफ्ट हॉकी फेडरेशन (ASHFI) का नया राष्ट्रीय अध्यक्ष चुना गया है।',
    content: `राजस्थान के आशुतोष को सर्वसम्मति से इंडियन सॉफ्ट हॉकी फेडरेशन (ASHFI) का नया राष्ट्रीय अध्यक्ष चुना गया है। उनकी इस नियुक्ति से देश भर के सॉफ्ट हॉकी प्रेमियों और खिलाड़ियों में उत्साह की लहर है।

नवनियुक्त अध्यक्ष आशुतोष ने कहा कि उनका मुख्य उद्देश्य देश के कोने-कोने में सॉफ्ट हॉकी को बढ़ावा देना, प्राथमिक और उच्च विद्यालयों में टूर्नामेंट आयोजित करना और खिलाड़ियों को विश्व स्तरीय सुविधाएं प्रदान करना है। उन्होंने कहा कि फेडरेशन आगामी समय में कई बड़े राज्य और राष्ट्रीय स्तर के चैंपियनशिप आयोजित करने जा रहा है।`,
    date: 'July 15, 2026',
    category: 'Federation News',
    imageUrl: 'https://i.postimg.cc/tJN0ntps/Screenshot-2026-07-15-135443.png',
    readTime: '2 min read',
    externalUrl: 'https://www.etvbharat.com/hi/!state/ashutosh-became-the-president-of-indian-soft-hockey-federation-rajasthan-news-rjs25012101119'
  },
  {
    id: 'news-excellence-award',
    title: 'Excellence Award 2025: जयपुर में गरिमामयी एक्सीलेंस अवार्ड समारोह संपन्न',
    excerpt: 'जयपुर में आयोजित भव्य एक्सीलेंस अवार्ड 2025 समारोह में खेल और समाज सेवा के क्षेत्र में उत्कृष्ट योगदान देने वाले विभूतियों को सम्मानित किया गया।',
    content: `जयपुर में आयोजित गरिमामयी एक्सीलेंस अवार्ड 2025 समारोह में खेल, संस्कृति और समाज सेवा को बढ़ावा देने वाले प्रमुख व्यक्तित्वों को सम्मानित किया गया। 

इस भव्य कार्यक्रम में सॉफ्ट हॉकी के क्षेत्र में अभूतपूर्व योगदान देने वाले पदाधिकारियों और असाधारण एथलीटों को विशिष्ट एक्सीलेंस अवार्ड से नवाजा गया। इस पुरस्कार से न केवल खिलाड़ियों का मनोबल बढ़ा है बल्कि सॉफ्ट हॉकी के विकास को एक नई दिशा मिली है। समारोह में खेल जगत के कई दिग्गज और गणमान्य अतिथि उपस्थित रहे।`,
    date: 'July 15, 2026',
    category: 'Awards & Honors',
    imageUrl: 'https://i.postimg.cc/vTfYqVyS/Screenshot-2026-07-15-135242.png',
    readTime: '3 min read',
    externalUrl: 'https://news21national.com/excellence-award-2025-%e0%a4%9c%e0%a4%af%e0%a5%81%e0%a4%b0-%e0%a4%ae%e0%a5%87%e0%a4%82-%e0%a4%8f%e0%a5%8d%e0%a4%b8%e0%a5%80%e0%a4%b2%e0%a5%87%e0%a4%82%e0%a4%b8-%e0%a4%85%e0%a4%b5/'
  },
  {
    id: 'news-official-ishl-launch',
    title: 'Amateur Soft Hockey Federation (ASHFI) Official Press Release',
    excerpt: 'Official updates from the Indian Soft Hockey Federation regarding state tournaments and league structures.',
    content: `The Amateur Soft Hockey Federation of India (ASHFI) has officially announced the launch of new state-wide championships and structured pathways for young athletes. 

With over 31+ states actively participating, the federation aims to foster a strong foundation of sportsmanship, speed, and strategic coordination. The upcoming league schedules, player scouting guidelines, and team roster requirements have been compiled in the official database. Explore the full range of match logs and standings dynamically updated.`,
    date: 'July 15, 2026',
    category: 'Federation Update',
    imageUrl: 'https://i.postimg.cc/wjSqD2Dp/Screenshot-2026-07-15-132508.png',
    readTime: '2 min read',
    externalUrl: 'https://news21national.com/excellence-award-2025-%e0%a4%9c%e0%a4%af%e0%a5%81%e0%a4%b0-%e0%a4%ae%e0%a5%87%e0%a4%82-%e0%a4%8f%e0%a5%8d%e0%a4%b8%e0%a5%80%e0%a4%b2%e0%a5%87%e0%a4%82%e0%a4%b8-%e0%a4%85%e0%a4%b5/'
  },
  {
    id: 'news-jaipur-soft-hockey',
    title: 'जयपुर बना सॉफ्ट हॉकी का नया गढ़: राष्ट्रीय स्वर्ण पदक और अंतरराष्ट्रीय स्तर की तैयारियों का प्रमुख केंद्र',
    excerpt: 'जयपुर में आयोजित सॉफ्ट हॉकी टूर्नामेंट्स और विशेष प्रशिक्षण शिविरों ने खेल जगत में हलचल मचा दी है। जानिए सवाई मानसिंह स्टेडियम और द्रोणाचार्य स्पोर्ट्स एकेडमी की स्वर्णिम गाथा।',
    content: `जयपुर, राजस्थान में सॉफ्ट हॉकी का रोमांच अपने चरम पर है! हाल के महीनों में गुलाबी नगरी ने कई बड़े राष्ट्रीय टूर्नामेंट और ट्रेनिंग कैंपों की सफलतापूर्वक मेजबानी की है, जिन्होंने न केवल राज्य के उभरते खिलाड़ियों की खेल प्रतिभा को निखारा है बल्कि भारत को अंतरराष्ट्रीय मंच पर भी गौरवान्वित किया है।

आइए एक नजर डालते हैं जयपुर में आयोजित हुए सॉफ्ट हॉकी के कुछ ऐतिहासिक इवेंट्स और उनकी स्वर्णिम सफलताओं पर:

🏆 इवेंट 1: 5वीं सॉफ्ट हॉकी नेशनल चैंपियनशिप
अमेच्योर सॉफ्ट हॉकी फेडरेशन ऑफ इंडिया (ASHFI) द्वारा जयपुर के प्रतिष्ठित हॉकी ग्राउंड, सवाई मानसिंह (SMS) स्टेडियम में 29 जनवरी से 1 फरवरी, 2026 तक 5वीं सॉफ्ट हॉकी नेशनल चैंपियनशिप का शानदार आयोजन किया गया। इस ऐतिहासिक प्रतियोगिता के रोमांचक सीनियर पुरुष वर्ग के फाइनल मुकाबले में मेजबान राजस्थान ने शानदार खेल भावना और तकनीकी श्रेष्ठता का परिचय देते हुए महाराष्ट्र को 5-3 के अंतर से परास्त किया और चमचमाता राष्ट्रीय स्वर्ण पदक (Gold Medal) अपने नाम कर इतिहास रच दिया।

⭐ इवेंट 2: 11वीं दक्षिण एशियाई सॉफ्ट हॉकी चैंपियनशिप हेतु विशेष प्रशिक्षण शिविर
भारतीय राष्ट्रीय सॉफ्ट हॉकी टीमों की अभूतपूर्व तैयारियों के लिए जयपुर के द्रोणाचार्य स्पोर्ट्स एकेडमी में 15 से 18 मई, 2026 तक एक उच्च प्रदर्शन वाले राष्ट्रीय प्रशिक्षण शिविर (High-Performance Training Camp) का आयोजन किया गया। इस शिविर में खिलाड़ियों को विश्वस्तरीय फिजिकल कंडीशनिंग और विशेष सामरिक रणनीतियों का प्रशिक्षण दिया गया। इस बेजोड़ ट्रेनिंग की बदौलत भारतीय पुरुष और महिला दोनों राष्ट्रीय टीमों ने नेपाल में आयोजित चैंपियनशिप में स्वर्ण पदक जीतकर अंतरराष्ट्रीय स्तर पर तिरंगे का मान बढ़ाया।

🏅 इवेंट 3: 5वीं राजस्थान सॉफ्ट हॉकी स्टेट चैंपियनशिप
इस राज्य स्तरीय प्रतियोगिता में जयपुर जिला टीम का दबदबा एकतरफा रहा। जयपुर की टीमों ने असाधारण खेल कौशल का प्रदर्शन करते हुए सीनियर पुरुष (Senior Men's) और जूनियर बॉयज (Junior Boys') दोनों श्रेणियों में शानदार स्वर्ण पदक जीतकर पूरे राज्य में अपनी बादशाहत कायम की।

🏟️ जयपुर के गौरवशाली खेल आयोजन स्थल (Stadium Venues):
- हॉकी ग्राउंड, सवाई मानसिंह (SMS) स्टेडियम, जयपुर: आधुनिक सुविधाओं और अंतरराष्ट्रीय स्तर के ग्राउंड इंफ्रास्ट्रक्चर से सुसज्जित यह मैदान रोमांचक खिताबी जंग और राजस्थान की ऐतिहासिक खिताबी जीत का गवाह बना।
- द्रोणाचार्य स्पोर्ट्स एकेडमी, जयपुर: अत्याधुनिक जिम और वैज्ञानिक ट्रेनिंग उपकरणों से लैस यह एकेडमी हमारे राष्ट्रीय चैंपियंस के लिए असली लॉन्चपैड साबित हुई।`,
    date: 'July 14, 2026',
    category: 'Tournament Update',
    imageUrl: '/src/assets/images/soft_hockey_news_cover_1784028937329.jpg',
    readTime: '3 min read'
  },
  {
    id: 'news-1',
    title: 'Hockey India League Returns with Grand Vision and Unified Men & Women Divisions',
    excerpt: 'The highly anticipated Hockey India League (HIL) enters a historic era, introducing a concurrent women’s competition alongside the core men’s championship.',
    content: `The legendary Hockey India League (HIL) has officially marked its triumphant return to the global sporting calendar, setting a benchmark for international hockey development. Under the stewardship of Hockey India and backed by government patronage, the league returns with a historic milestone: the introduction of a concurrent Women's Division.

For the first time ever, six elite women’s clubs will battle alongside the legendary six men's franchises, offering equal match-day billing, state-of-the-art facilities, and competitive payrolls. 

"Our primary mission has always been the upliftment of Indian hockey at both grassroots and elite professional platforms," stated Hockey India leadership. "By providing our incredible women athletes with the same grand stage as their male counterparts, we are accelerating India’s pathway to Olympic dominance."

The double-round robin schedule kicks off across multi-city hubs including New Delhi, Bhubaneswar, Ranchi, and Gwalior, featuring world-class turf systems, electronic video review technologies, and elite international officiating. Fans around the world can look forward to high-velocity contests, tactical innovations, and the emergence of the next generation of global hockey stars.`,
    date: 'July 12, 2026',
    category: 'League Announcement',
    imageUrl: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?q=80&w=600&auto=format&fit=crop',
    readTime: '4 min read'
  },
  {
    id: 'news-2',
    title: 'Odisha Queens Ink Landmark Partnership with Global Sports Brands',
    excerpt: 'Bhubaneswar’s newest franchise secures multi-million rupee sponsorship, promising major investments into state-level development camps.',
    content: `Bhubaneswar-based Odisha Queens have officially solidified a historic five-year commercial partnership with global sports apparel giants and regional infrastructure consortiums. The landmark investment is poised to make Odisha Queens the most financially robust franchise in the newly established HIL Women’s Division.

The agreement guarantees not only custom, high-performance athletic apparel for the senior squad but also establishes fully-funded development academies across rural Odisha.

Head coach Janneke Schopman expressed immense pride in the partnership, stating: "This sponsorship is a validation of the sheer potential and athletic caliber present in our roster. It enables us to implement advanced telemetry tracking systems, bring in specialized conditioning coaches, and host exposure tours that will refine our tactics against international systems."

The investment also includes state-of-the-art medical recovery suites at the Kalinga Stadium, paving the way for world-class rehabilitation and player wellness management. Odisha Queens are building a long-term empire, aiming to cultivate local prodigies into Olympians.`,
    date: 'July 11, 2026',
    category: 'Franchise Update',
    imageUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=600&auto=format&fit=crop',
    readTime: '3 min read'
  },
  {
    id: 'news-3',
    title: 'Delhi Waveriders Captain Promises Strategic Masterclass Ahead of Rivalry Clash',
    excerpt: 'As Delhi gears up to face rivals Kalinga Lancers on home turf, skipper reveals technical tweaks and focus on penalty corner conversion rates.',
    content: `Tensions and excitement are reaching a boiling point in the nation's capital as Delhi Waveriders prepare to play hosts to the high-flying Kalinga Lancers. With both squads battling for the top-four seedings in the tournament table, this match is widely regarded as a pivotal turning point for the mid-season standings.

In a closed-door press conference at the Major Dhyan Chand National Stadium, the Waveriders skipper shared insights on team preparation and recovery.

"We played a very physical match in Lucknow earlier this week, and the recovery process was intensive," the captain stated. "For the Lancers, we have developed a very specific tactical counter. Our midfield structure will be much more dynamic to choke their transition play, and we have spent the last three training sessions purely perfecting our penalty corner variations."

Waveriders' penalty corner conversion rate currently stands at 32%—a statistic the coaching staff is eager to elevate. With elite drag-flickers on both rosters, the derby is expected to be a high-scoring masterclass of speed, power, and drag-flick precision.`,
    date: 'July 10, 2026',
    category: 'Match Preview',
    imageUrl: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=600&auto=format&fit=crop',
    readTime: '5 min read'
  },
  {
    id: 'news-4',
    title: 'How Grassroots Scouting in HIL is Cultivating India’s Next Olympic Gold Aspirations',
    excerpt: 'A deep dive into the scouting programs operated by HIL franchises in rural academies, revealing a massive upsurge in youth participation.',
    content: `The ultimate measure of a professional sports league is the long-term health of the national team it feeds. For India, a country with an illustrious hockey legacy consisting of eight Olympic Gold medals, the Hockey India League is acting as the ultimate catalyst for revival.

Over the past three years, the league’s robust grassroots scouting system has integrated with school championships, sports hostels, and rural academy networks. Each franchise is mandated to operate two under-18 regional academies, ensuring that talented children from remote villages receive high-caliber professional instruction.

This structured ecosystem has led to a massive upsurge in youth participation. Players who once trained with makeshift wooden sticks on uneven dirt patches are now performing under stadium spotlights on elite synthetic turf.

"We aren't just scout-watching at major tournaments anymore," says veteran coach Harendra Singh. "We are active participants in their growth from age twelve. We teach them nutritional literacy, modern tactical spacing, and physical resilience. This guarantees that when they debut for Ranchi Rays or Punjab Warriors, they are ready for the professional pace."

The benefits are already translating onto the international arena. The junior national squads have registered record-breaking win percentages, proving that India's grassroots engine is fully supercharged and ready to reclaim global supremacy.`,
    date: 'July 08, 2026',
    category: 'Feature Editorial',
    imageUrl: 'https://images.unsplash.com/photo-1606913080251-177b9492f026?q=80&w=600&auto=format&fit=crop',
    readTime: '6 min read'
  }
];

export const VIDEOS: HighlightVideo[] = [
  {
    id: 'vid-1',
    title: 'Elite Turf Play & Skill Exhibition | Official ISHL Training',
    duration: '01:00',
    thumbnailUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=600&auto=format&fit=crop',
    videoUrl: 'https://www.instagram.com/reel/DU7TcrIAc00/embed/',
    date: 'July 10, 2026',
    matchInfo: 'ISHL Elite Skills'
  },
  {
    id: 'vid-2',
    title: 'Highlights of High-Octane Matchday Play | ASHFI Jaipur',
    duration: '00:45',
    thumbnailUrl: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?q=80&w=600&auto=format&fit=crop',
    videoUrl: 'https://www.instagram.com/reel/DUpiD82gWM8/embed/',
    date: 'July 08, 2026',
    matchInfo: 'Championship Actions'
  },
  {
    id: 'vid-3',
    title: 'Unbelievable Goal Saves & Tactical Goalkeeping Drills',
    duration: '00:55',
    thumbnailUrl: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=600&auto=format&fit=crop',
    videoUrl: 'https://www.instagram.com/reel/DUe21n-gY6r/embed/',
    date: 'July 05, 2026',
    matchInfo: 'Defense masterclass'
  },
  {
    id: 'vid-4',
    title: 'Indian Soft Hockey League Grand Finals Celebrations',
    duration: '01:15',
    thumbnailUrl: 'https://images.unsplash.com/photo-1606913080251-177b9492f026?q=80&w=600&auto=format&fit=crop',
    videoUrl: 'https://www.instagram.com/reel/DDbv8GdSeOe/embed/',
    date: 'June 28, 2026',
    matchInfo: 'Grand Finals 2026'
  },
  {
    id: 'vid-5',
    title: 'Fast Agility Dribbling & Stick Ball Control Exhibition',
    duration: '00:40',
    thumbnailUrl: 'https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?q=80&w=600&auto=format&fit=crop',
    videoUrl: 'https://www.instagram.com/reel/DThHb7FgbBk/embed/',
    date: 'June 20, 2026',
    matchInfo: 'Technical Drills'
  }
];

export const CAROUSEL_SLIDES = [
  {
    id: 1,
    title: "A NEW ERA OF INDIAN HOCKEY",
    subtitle: "Hockey India League 2026",
    tagline: "Experience high-octane sporting action featuring the world's finest drag-flickers and playmakers. The ultimate clash of hockey titans returns with active Men's & Women's leagues!",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1200&auto=format&fit=crop",
    ctaText: "Explore Matches",
    ctaTarget: "matches"
  },
  {
    id: 2,
    title: "HISTORIC WOMEN'S DIVISION DEBUTS",
    subtitle: "Empowering Next-Gen Champions",
    tagline: "Witness elite state-of-the-art squads like Odisha Queens and Haryana Golden Girls battles under floodlights. Equal play. Equal stage. Absolute brilliance.",
    image: "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?q=80&w=1200&auto=format&fit=crop",
    ctaText: "View Standings",
    ctaTarget: "standings"
  },
  {
    id: 3,
    title: "GRASSROOTS TO GLOBAL DOMINANCE",
    subtitle: "The Olympic Gateway",
    tagline: "India's legendary 8-time Olympic gold heritage is being revitalized. See how regional scouting programs are nurturing rural prodigies into international icons.",
    image: "https://images.unsplash.com/photo-1606913080251-177b9492f026?q=80&w=1200&auto=format&fit=crop",
    ctaText: "Read News & Features",
    ctaTarget: "news"
  }
];
