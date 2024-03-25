const users = [];
const generateID = () => Math.random().toString(36).substring(2, 10);

app.post("/api/register", async (req, res) => {
  const { email, password, username } = req.body;
  const id = generateID();
  const result = users.filter(
    (user) => user.email === email && user.password === password
  );
  if (result.length === 0) {
    const newUser = { id, email, password, username };
    users.push(newUser);
    return res.json({
      message: "Account created successfully!",
    });
  }
  res.json({
    error_message: "User already exists",
  });
});

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  let result = users.filter(
    (user) => user.email === email && user.password === password
  );
  if (result.length !== 1) {
    return res.json({
      error_message: "Incorrect credentials",
    });
  }
  res.json({
    message: "Login successfully",
    id: result[0].id,
  });
});
