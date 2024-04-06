import React from 'react';
import { Typography, Box, Container, Button } from '@mui/material';
import { FlaskConicalOff } from 'lucide-react';
type props = {
     message: string;
     onAddClick: ()=> void;
}
const EmptyPage:React.FC<props> = ({ message, onAddClick }) => {
  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        < FlaskConicalOff style={{ fontSize: 80, marginBottom: 20 }} />
        <Typography variant="h5" component="h2" gutterBottom>
          {message || 'Nothing to display here'}
        </Typography>
        <Button variant="contained" color="primary" onClick={onAddClick}>
          Add New
        </Button>
      </Box>
    </Container>
  );
};

export default EmptyPage;
