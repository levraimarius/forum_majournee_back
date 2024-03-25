app.post("/api/thread/like", (req, res) => {
  const { threadId, userId } = req.body;
  const result = threadList.filter((thread) => thread.id === threadId);
  const threadLikes = result[0].likes;
  const authenticateReaction = threadLikes.filter((user) => user === userId);
  if (authenticateReaction.length === 0) {
    threadLikes.push(userId);
    return res.json({
      message: "You've reacted to the post!",
    });
  }
  res.json({
    error_message: "You can only react once!",
  });
});
