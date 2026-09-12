# Juan_2ndAct — Campus Coffee Order Customizer

Lab Activity: State and Navigation (Expo Router)

## What this app does
- `app/index.js` — Order screen. Uses `useState` for `coffeeCount` (starts at 1),
  has "+ Add Cup" / "- Remove Cup" buttons, and blocks the count from going below 1.
- `app/receipt.js` — Receipt screen. Reads `coffeeCount` via `useLocalSearchParams`
  and calculates `totalBill = coffeeCount * 150`.
- `app/_layout.js` — Wraps both screens in an Expo Router `<Stack>` so a back
  button appears automatically on the receipt screen.

## Run it
```
npm install
npm run start
```
Then open in Expo Go, an emulator, or the web preview.
