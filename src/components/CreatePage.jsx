import React, { useState } from 'react';
import { TextField, Button, Box, Container, Typography } from '@mui/material';

function CreatePage() {
  const [recipe, setRecipe] = useState({
    title: '',
    ingredients: '',
    instructions: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log(recipe);
  };

  return (
    <Container component="main" maxWidth="sm">
      <Typography variant="h6" gutterBottom>
        Create a New Recipe
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="title"
          label="Recipe Title"
          name="title"
          autoFocus
          value={recipe.title}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="ingredients"
          label="Ingredients (comma separated)"
          id="ingredients"
          value={recipe.ingredients}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="instructions"
          label="Instructions"
          id="instructions"
          multiline
          rows={4}
          value={recipe.instructions}
          onChange={handleChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Create Recipe
        </Button>
      </Box>
    </Container>
  )
}

export default CreatePage;