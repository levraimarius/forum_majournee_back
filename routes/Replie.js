app.post("/api/thread/replies", (req, res) => {
  const { id } = req.body;
  const result = threadList.filter((thread) => thread.id === id);
  res.json({
    replies: result[0].replies,
    title: result[0].title,
  });
});

app.post("/api/create/reply", async (req, res) => {
  const { id, userId, reply } = req.body;
  const result = threadList.filter((thread) => thread.id === id);
  const user = users.filter((user) => user.id === userId);
  result[0].replies.unshift({
    userId: user[0].id,
    name: user[0].username,
    text: reply,
  });

  res.json({
    message: "Response added successfully!",
  });
});
