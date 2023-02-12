import yaml from 'js-yaml';

const CONFIG = yaml.load(`

title: Web3Privacy Prague 2023
shortname: Web3Privacy Summit
date: Monday, 5. June 2023
venue: X10, Prague
themes:
- title: Human rights DAOs (pro-privacy)
- title: Identity (ID)
- title: Mixnets → Full-Stack Privacy
- title: Cryptography
- title: Tech journalists
- title: Asian community
- title: Privacy wars
- title: Privacy workforce
- title: "Privacy activist's"
- title: R&D (ZK, MPC)
- title: Network states (with a privacy focus)
- title: Solarpunk vs Lunarpunk
- title: Veksl
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
  - 20:00 - morning
  - Prague rave from top DJs
  - VJs and projections
  - Networking with attendees, speakers & sponsors
  note: "*Party access is included in the All-day Pass"
faq:
- title: Who is the event for?
  text: |
    Our event is for anyone interested in privacy topics in the Web3 industry. There will be space for about 300 enthusiasts.
- title: How do I get to the venue?
  text: |
    Venue X10 (full name "[Divadlo X10](https://divadlox10.cz)") is located in the centre of Prague near the metro station *Národní Třída* (Line B) and *Můstek* (Line A,C). The address is [Charvátova 10/39, Prague 1, 110 00](https://goo.gl/maps/Yh8qWagnqB1DvK676) ([Google Maps](https://goo.gl/maps/Yh8qWagnqB1DvK676)).
- title: Will there be any food or drink?
  text: |
    We don't know, but we'll do our best. This unfortunately depends on the sponsors.
program:
- time: 9:00 - 9:30
  title: Registration & networking
- time: 9:30 - 9:35
  title: Welcome to Web3Privacy
  speakers:
  - name: TBA
  desc: |
    Welcoming visitors to our private-centric research, community and conference
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
  desc: |
    Enjoy our afterparty in Lunarpunk style with quality Prague rave DJs, which will take place in the same venue until the morning (4am).

`);

export default CONFIG;