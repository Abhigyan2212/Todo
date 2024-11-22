router.post('/add/todo', async (req, res) => {
  try {
      const { title, description } = req.body;
      if (!title || !description) {
          return res.status(400).send('Title and description are required');
      }

      const todo = new Todo({ title, description });
      await todo.save();
      res.redirect('/'); // Redirect to home page
  } catch (error) {
      res.status(500).send(error.message);
  }
});
