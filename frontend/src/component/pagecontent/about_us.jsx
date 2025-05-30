import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Avatar,
  Paper,
  Divider,
  Link,
  Stack,
  ButtonBase
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

const teamMembers = [
  {
    name: 'Alice Johnson',
    role: 'Founder & CEO',
    image: 'https://i.pravatar.cc/150?img=1',
  },
  {
    name: 'Bob Smith',
    role: 'Lead Developer',
    image: 'https://i.pravatar.cc/150?img=2',
  },
  {
    name: 'Clara White',
    role: 'UI/UX Designer',
    image: 'https://i.pravatar.cc/150?img=3',
  },
];

const AboutUs = () => {
  return (
    <Box>
      {/* Main About Section */}
      <Box sx={{ bgcolor: '#0f1114', color: '#fff', py: 8 }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Typography variant="h3" gutterBottom>
              About Us
            </Typography>
            <Typography variant="h6" color="grey.400">
              We are a passionate team dedicated to building high-quality digital experiences.
            </Typography>
          </Box>

          <Grid container spacing={4} justifyContent="center">
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <ButtonBase
                  sx={{
                    width: '100%',
                    display: 'block',
                    textAlign: 'center',
                    borderRadius: 3,
                    '&:hover': { boxShadow: 6, transform: 'scale(1.02)', transition: '0.3s ease-in-out' }
                  }}
                  onClick={() => alert(`Clicked on ${member.name}`)} // Replace this if needed
                >
                  <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
                    <Avatar
                      alt={member.name}
                      src={member.image}
                      sx={{ width: 100, height: 100, margin: '0 auto 1rem auto' }}
                    />
                    <Typography variant="h6" sx={{ color: 'text.primary' }}>
                      {member.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {member.role}
                    </Typography>
                  </Paper>
                </ButtonBase>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Box sx={{ bgcolor: '#5e4b8b', color: 'white', py: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>Contact Us</Typography>
              <Divider sx={{ mb: 2, bgcolor: 'white', width: '50px' }} />
              <Typography fontWeight="bold">Other Regions</Typography>
              <Stack direction="row" alignItems="center" spacing={1}>
                <EmailIcon fontSize="small" />
                <Typography variant="body2">contactprosansiv@gmail.com</Typography>
              </Stack>
            </Grid>

            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>Useful Links</Typography>
              <Divider sx={{ mb: 2, bgcolor: 'white', width: '50px' }} />
              <Stack spacing={1}>
                <Link href="#" color="inherit" underline="hover">Home</Link>
                <Link href="#" color="inherit" underline="hover">Services</Link>
                <Link href="#" color="inherit" underline="hover">About</Link>
                <Link href="#" color="inherit" underline="hover">Contact</Link>
              </Stack>
            </Grid>

            {/* About Company */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>About lorem</Typography>
              <Divider sx={{ mb: 2, bgcolor: 'white', width: '50px' }} />
              <Typography variant="body2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus reiciendis corrupti cupiditate. Illum praesentium,
                laudantium minus minima asperiores reprehenderit rem! Necessitatibus magnam officiis rem qui? Quasi optio quae facilis 
                veniam?
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutUs;
