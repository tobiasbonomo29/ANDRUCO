export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0A1128",
        card: "hsl(222 40% 10%)",
        border: "hsl(222 25% 20%)",
        primary: "hsl(45 96% 56%)",
        text: "hsl(210 20% 96%)",
        muted: "hsl(217 15% 60%)",
        success: "hsl(142 71% 45%)",
        destructive: "hsl(0 84% 60%)",
        "champions-red": "hsl(355 55% 28%)",
        "champions-gold": "hsl(45 85% 62%)",
        twitch: "#9146FF",
      },
    },
  },
  plugins: [],
};
