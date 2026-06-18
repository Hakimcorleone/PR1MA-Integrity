export const genderOptions = ["Woman", "Man", "Neutral"];

export const skinToneOptions = [
  { label: "Tone 1", value: "#f2c7a4" },
  { label: "Tone 2", value: "#d9a06f" },
  { label: "Tone 3", value: "#a86f45" },
  { label: "Tone 4", value: "#6f432f" },
];

export const hairColorOptions = [
  { label: "Black", value: "#161616" },
  { label: "Brown", value: "#5a3527" },
  { label: "Dark Auburn", value: "#6b2f24" },
  { label: "Grey", value: "#6b7280" },
];

export const topOptions = [
  { label: "Navy Blazer", value: "#0b2c4d" },
  { label: "Teal Shirt", value: "#0f766e" },
  { label: "Maroon Baju", value: "#8a2832" },
  { label: "Gold Corporate", value: "#d7a12b" },
  { label: "White Formal", value: "#f8fafc" },
];

export const pantsOptions = [
  { label: "Charcoal Slacks", value: "#283447" },
  { label: "Navy Seluar", value: "#123b62" },
  { label: "Black Seluar", value: "#111827" },
  { label: "Khaki Seluar", value: "#b59f75" },
];

export const shoeOptions = [
  { label: "Black", value: "#111827" },
  { label: "Brown", value: "#6b3f28" },
  { label: "Dark Navy", value: "#061525" },
];

export const tudungOptions = [
  { label: "No Tudung", value: false },
  { label: "Pakai Tudung", value: true },
];

export const defaultAvatar = {
  id: "custom-agent",
  codename: "Integrity Agent",
  gender: "Woman",
  skinTone: "#d9a06f",
  hairColor: "#161616",
  topColor: "#0b2c4d",
  pantsColor: "#283447",
  shoeColor: "#111827",
  hijab: true,
  hijabColor: "#f8fafc",
  signal: "Ready",
};

export const avatarPresets = [
  {
    ...defaultAvatar,
    id: "field-agent",
    codename: "Field Agent",
    topColor: "#0b2c4d",
    pantsColor: "#283447",
    signal: "Site Check",
  },
  {
    ...defaultAvatar,
    id: "procurement-agent",
    codename: "Procurement Agent",
    topColor: "#0f766e",
    pantsColor: "#123b62",
    hijab: false,
    signal: "Tender Watch",
  },
  {
    ...defaultAvatar,
    id: "finance-agent",
    codename: "Finance Agent",
    gender: "Man",
    topColor: "#8a2832",
    pantsColor: "#111827",
    hijab: false,
    signal: "Claims Check",
  },
];

export const avatarOptions = avatarPresets;
