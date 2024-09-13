export interface Color {
    bg: string;
    text: string;
}
export type Mode = "light" | "dark";

const colors: {
    light: { [key: string]: Color };
    dark: { [key: string]: Color };
} = {
    light: {
        red: { bg: "#fee2e2", text: "#dc2626" },
        rose: { bg: "#ffe4e6", text: "#e11d48" },
        blue: { bg: "#dbeafe", text: "#2563eb" },
        green: { bg: "#d1fae5", text: "#059669" },
        indigo: { bg: "#e0e7ff", text: "#4f46e5" },
        cyan: { bg: "#cffafe", text: "#0891b2" },
        lime: { bg: "#ecfccb", text: "#65a30d" },
        amber: { bg: "#fef3c7", text: "#d97706" },
        violet: { bg: "#ede9fe", text: "#7c3aed" },
        fuchsia: { bg: "#fae8ff", text: "#c026d3" },
        purple: { bg: "#f3e8ff", text: "#9333ea" },
        pink: { bg: "#fce7f3", text: "#db2777" },
        yellow: { bg: "#fef9c3", text: "#ca8a04" },
        orange: { bg: "#ffedd5", text: "#ea580c" },
    },
    dark: {
        red: { bg: "#4c0519", text: "#ff9aa2" },
        rose: { bg: "#3f0d1a", text: "#ff66a5" },
        blue: { bg: "#0a1931", text: "#82cfff" },
        green: { bg: "#042f1a", text: "#7bf1a8" },
        indigo: { bg: "#1c2541", text: "#9dffff" },
        cyan: { bg: "#053f45", text: "#60c0c9" },
        lime: { bg: "#243d25", text: "#befd53" },
        amber: { bg: "#4a3000", text: "#ffc14f" },
        violet: { bg: "#1f0b2e", text: "#c084fc" },
        fuchsia: { bg: "#3f001d", text: "#ff80ab" },
        purple: { bg: "#1f0b2e", text: "#c084fc" },
        pink: { bg: "#3f001d", text: "#ff80ab" },
        yellow: { bg: "#403d00", text: "#ffeb3b" },
        orange: { bg: "#401a00", text: "#ff9800" },
    },
};

export const getRandomColors = (mode: "light" | "dark"): Color => {
    const keys = Object.keys(colors[mode]);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return colors[mode][randomKey];
};
