const config = {
  title: "Web3Privacy Prague 2023",
  shortname: "Web3Privacy Summit",
  date: "Monday, 5. June 2023",
  venue: "X10, Prague",
  themes: [
    { title: "Human rights DAOs (pro-privacy)" },
    { title: "Identity (ID)" },
    { title: "Mixnets → Full-Stack Privacy" },
    { title: "Cryptography" },
    { title: "Tech journalists" },
    { title: "Asian community" },
    { title: "Privacy wars" },
    { title: "Privacy workforce" },
    { title: "Privacy activist's" },
    { title: "R&D (ZK, MPC)" },
    { title: "Network states (with a privacy focus)" },
    { title: "Solarpunk vs Lunarpunk" },
    { title: "Veksl" }
  ],
  tickets: [
    { title: "Conference ticket" },
    { title: "Party ticket" }
  ]
};
async function load({ params, url, fetch }) {
  return {
    config
  };
}
const _layout = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  load
}, Symbol.toStringTag, { value: "Module" }));
export {
  _layout as _,
  load as l
};
