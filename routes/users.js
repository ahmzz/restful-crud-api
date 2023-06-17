import express from "express";
const router = express.Router();

const users = [
  {
    firstName: "Ahmed",
    lastName: "Imran",
    age: 24,
  },
  {
    firstName: "Raheel",
    lastName: "Ahmed",
    age: 24,
  },
  {
    firstName: "Fahad",
    lastName: "Israr",
    age: 24,
  },
  {
    firstName: "Ibrahim",
    lastName: "Awab",
    age: 24,
  },
  {
    firstName: "Nihar",
    lastName: "Khan",
    age: 24,
  },
];


router.get("/", (req, res) => {
  res.send(users);
});

router.post('/',(req,res)=>{
    res.send('Data Posted')
})

export default router;
