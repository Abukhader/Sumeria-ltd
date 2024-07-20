import React, { useEffect, useState } from "react";
import axios from "axios";
import { Typography, List, ListItem, ListItemText, Paper } from "@mui/material";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        // Handle not logged in scenario
        return;
      }

      try {
        const response = await axios.get("http://localhost:3000/api/books", {
          headers: {
            Authorization: token,
          },
        });
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
        // Handle error fetching books
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Books List
      </Typography>
      <Paper elevation={3} style={{ padding: 20 }}>
        <List>
          {books.map((book) => (
            <ListItem key={book.id}>
              <ListItemText
                primary={book.title}
                secondary={`by ${book.author}`}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </div>
  );
};

export default Books;
