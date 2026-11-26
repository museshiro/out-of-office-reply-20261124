const fs = require("node:fs");

const line =
  "I'm on vacation until Monday. My safety filters are covering; " +
  "they'll say no to anything interesting.";

if (line.length > 160) {
  throw new Error("line exceeds 160 characters: " + line.length);
}
if (line.includes("\n")) {
  throw new Error("line must be a single line");
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", line);
