export const COLORS = {
  violet: "#5E17EB",
  violetDeep: "#3D0FA8",
  violetLight: "#A684ED",
  violetBtn: "#707DCB",
  orange: "#FF7A29",
  strawberry: "#FF3D68",
  lemonade: "#FFD23F",
  cola: "#4A2B22",
  pineapple: "#FFB627",
  ink: "#1A1B1E",
};

export const FLAVORS = [
  {
    key: "violet",
    name: "Sparkling Blue",
    tag: "The Flagship",
    color: COLORS.violet,
    text: "#fff",
    img: "../assets/main.png",
    desc: "Sun-ripened oranges, reimagined with a crackle of blue-raspberry fizz. The bottle that started Emi Drinks — bright, bold, and unmistakably ours.",
  },
  {
    key: "pineapple",
    name: "Pineapple Signature",
    tag: "Fan Favorite",
    color: COLORS.pineapple,
    text: COLORS.ink,
    img: "../assets/papple.png",
    desc: "A deep, robust pineapple spice rounded out with a whisper of natural vanilla — nostalgic, sophisticated, effervescent.",
  },
  {
    key: "strawberry",
    name: "Strawberry",
    tag: "",
    color: COLORS.strawberry,
    text: "#fff",
    img: "../assets/straw.png",
    desc: "Sweet, sun-warmed strawberries with a tangy citrus edge. Vibrant, juicy, and impossible to put down.",
  },
  {
    key: "lemonade",
    name: "Lemonade",
    tag: "",
    color: COLORS.lemonade,
    text: COLORS.ink,
    img: "../assets/lemonade.png",
    desc: "Zesty lemons balanced with a touch of sweetness. Classic, thirst-quenching, endlessly refillable.",
  },
  {
    key: "cola",
    name: "Cola",
    tag: "",
    color: COLORS.cola,
    text: "#fff",
    img: "../assets/cola.png",
    desc: "Bold, caramelized depth with a hint of citrus lift. Sweetness and acidity in perfect balance.",
  },
  {
    key: "orange",
    name: "Orange",
    tag: "",
    color: COLORS.orange,
    text: "#fff",
    img: "../assets/orange.png",
    desc: "Vibrant, sun-ripened oranges with a tangy citrus finish. Deliciously fruity in every single sip.",
  },
];

export const PILLARS = [
  { icon: "Leaf", title: "Natural Ingredients", desc: "Made with real fruit extracts — nothing artificial, nothing hidden." },
  { icon: "Droplet", title: "Refreshing Taste", desc: "Sweet, citrusy, and uplifting, bottle after bottle." },
  { icon: "Heart", title: "Made For You", desc: "For every moment and every mood, all year round." },
];

export const NAV = [
  { label: "Home", path: "/" },
  { label: "Drink", path: "/drink" },
  { label: "About Us", path: "/about" },
  { label: "Contact", path: "/contact" },
];
