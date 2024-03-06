// Use toLocaleTimeString() without displaying Seconds in JS

const date = new Date();

// ✅ Using visitor's default locale
console.log(
  date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  }),
); // 👉️ 05:36 PM

// ✅ Using US locale
console.log(
  date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  }),
); // 👉️ 05:36 PM

// 👇️ 07/28/2023, 05:36 PM
console.log(
  date.toLocaleTimeString([], {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }),
);
