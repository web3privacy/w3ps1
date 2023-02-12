import yaml from 'js-yaml';

const CONFIG = yaml.load(`

title: Web3Privacy Prague 2023
shortname: "Web3Privacy Summit #1"
date: Monday, 5. June 2023
venue: X10, Prague
slogan: |
  We need to protect our privacy, and that's why we're coming together on June 5 to Prague to sit down and discuss different aspects of privacy in the Web3 industry - how we can help shape it and make it more accessible - building a shared culture. The conference complements the research project [Web3Privacy Now](http://web3privacy.info/) and was created by joining forces with the production team of the privacy hackathon [ETHBrno](https://ethbrno.cz/).
themes:
- title: Human rights DAOs (pro-privacy)
- title: Identity (ID)
- title: Mixnets → Full-Stack Privacy
  desc: Imagine a Full-Stack Privacy -> how would it even look alike!
- title: Cryptography
- title: Tech journalists
  desc: Ethical crypto vs global cyberwars agenda
- title: Asian community
  desc: It's rare to see asians in Europe, but there are so many of them doing privacy solutions
- title: Privacy wars
  desc: Why are privacy-blockchain socials so toxic? We should stop hating each other & work together
- title: Privacy workforce
- title: "Privacy activist's"
- title: R&D (ZK, MPC)
- title: Network states (with a privacy focus)
  desc: The network state-as-a-grassroots movement
- title: Solarpunk vs Lunarpunk
  desc: For solarpunk to succeed it must integrate the lunarpunk unconscious. The only hope for solarpunk is to [go dark](https://www.egirlcapital.com/writings/107533289). Do you agree?
- title: Veksl
  desc: Easy onboarding to cryptocurrencies without KYC/AML using P2P tools is crucial for privacy. What options do we have today?
tickets:
- title: All-day Access
  price: 2350 CZK (~99 EUR)
  includes:
  - All talks & panels
  - Coffee breaks
  - Buffet lunch
  - Networking drinks with speakers & attendees
- title: "#Lunarpunk Party"
  price: 350 CZK (~15 EUR)
  includes:
  - 8pm - morning
  - Prague rave from top DJs
  - VJs and projections
  - Networking with attendees, speakers & sponsors
  note: "*Party access is included in the All-day Pass"
faq:
- title: Who is the event for?
  text: Our event is for anyone interested in privacy topics in the Web3 industry. There will be space for about 300 enthusiasts.
- title: Will the talks be livestreamed and/or recorded?
  text: Yes, we plan do both. Livestream of the whole conference and recordings of the lectures will be publicly available.
- title: How do I get to the venue?
  text: Venue X10 (full name "[Divadlo X10](https://divadlox10.cz)") is located in the centre of Prague near the metro station *Národní Třída* (Line B) and *Můstek* (Line A,C). The address is [Charvátova 10/39, Prague 1, 110 00](https://goo.gl/maps/Yh8qWagnqB1DvK676) ([Google Maps](https://goo.gl/maps/Yh8qWagnqB1DvK676)).
people:
- id: mykola
  name: Mykola Siusko
  twitter: nicksvyaznoy
  img: mykola.png
- id: tree
  name: Tree
  twitter: treecz
  img: tree.jpeg
- id: juraj-bednar
  name: Juraj Bednar
  twitter: jurbed
  img: juraj-bednar.jpeg
- id: mario-havel
  name: Mario Havel
  twitter: TMIYChao
  img: mario-havel.jpeg
speakers:
- juraj-bednar
- mario-havel
hosts:
- mykola
- tree
program:
- time: 9:00 - 9:30
  title: Registration & networking
- time: 9:30 - 9:35
  title: Welcome to Web3Privacy
  speakers:
  - name: TBA
  desc: Welcoming visitors to our private-centric research, community and conference
- time: 9:35 - 10:55
  title: Talks I.
- time: 10:55 - 11:20
  title: 25min Coffee Break
- time: 11:25 - 12:40
  title: Talks II.
- time: 12:40 - 14:00
  title: Lunch & Networking
- time: 14:00 - 15:40
  title: Talks III.
- time: 15:40 - 16:05
  title: 25min Coffee Break
- time: 16:10 - 18:30
  title: Talks IV.
- time: 18:30 - 18:35
  title: Closing Remarks
  speakers:
  - name: TBA
- time: 18:30 - 20:00
  title: Networking & Drinks
- time: 20:00 - 4:00
  title: "#Lunarpunk party"
  desc: Enjoy our afterparty in Lunarpunk style with quality Prague rave DJs, which will take place in the same venue until the morning (4am).

`);

export default CONFIG;
