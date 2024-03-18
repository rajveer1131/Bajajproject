import express from "express";
const app = express();

app.use(express.json());

let odd = [];
let even = [];
let alphabets = [];
app.post("/home", (req, res) => {
  const data = req.body.data;

  data.forEach((item) => {
    if (typeof item === "number") {
      if (item % 2 !== 0) {
        odd.push(item);
      } else {
        even.push(item);
      }
    } else if (typeof item === "string") {
      const uppercaseLetters = item.match(/[A-Z]/g);
      if (uppercaseLetters) {
        alphabets.push(...uppercaseLetters);
      }
    }
  });

  res.status(200).json({
    is_success: true,
    user_id: "john_doe_17091999",
    email: "john@xyz.com",
    roll_number: "ABCD123",
    odd_numbers: odd,
    even_numbers: even,
    alphabets: alphabets,
  });
});

app.listen(4000, () => {
  console.log("server is running on port 4000");
});
