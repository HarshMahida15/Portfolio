import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Grid,
  IconButton,
  Snackbar,
  Alert,
} from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import GlowingButton from './common/GlowingButton';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSnackbar({
      open: true,
      message: 'Message sent successfully!',
      severity: 'success',
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box
      id="contact"
      component="section"
      sx={{
        py: 8,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: 'linear-gradient(135deg, #0B1221 0%, #162033 100%)',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h3"
                sx={{
                  mb: 2,
                  background: 'linear-gradient(45deg, #FF69B4, #9370DB)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 'bold',
                }}
              >
                DO YOU HAVE A PROJECT TO DISCUSS?
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  mb: 4,
                  color: '#fff',
                  fontWeight: 'medium',
                }}
              >
                GET IN TOUCH
              </Typography>

              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 2,
                    color: '#fff',
                    opacity: 0.8,
                  }}
                >
                  CONTACT
                </Typography>
                <Typography
                  component="a"
                  href="mailto:harshmahida1512@gmail.com"
                  sx={{
                    color: '#64B5F6',
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  harshmahida1512@gmail.com
                </Typography>
              </Box>

              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 2,
                    color: '#fff',
                    opacity: 0.8,
                  }}
                >
                  SOCIAL MEDIA
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <IconButton
                    href="https://linkedin.com"
                    target="_blank"
                    sx={{ color: '#fff' }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton
                    href="https://facebook.com"
                    target="_blank"
                    sx={{ color: '#fff' }}
                  >
                    <InstagramIcon />
                  </IconButton>
                  <IconButton
                    href="https://instagram.com"
                    target="_blank"
                    sx={{ color: '#fff' }}
                  >
                    <WhatsAppIcon />
                  </IconButton>
                  <IconButton
                    href="https://telegram.me/username"
                    target="_blank"
                    sx={{ color: '#fff' }}
                  >
                    <TelegramIcon />
                  </IconButton>
                </Box>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  color: '#fff',
                  opacity: 0.8,
                }}
              >
                CONTACT FORM
              </Typography>

              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 3,
                }}
              >
                <TextField
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  variant="outlined"
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: '#fff',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      '& fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#64B5F6',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'rgba(255, 255, 255, 0.7)',
                    },
                  }}
                />
                <TextField
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: '#fff',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      '& fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#64B5F6',
                      },
                    },
                  }}
                />
                <TextField
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  multiline
                  rows={4}
                  variant="outlined"
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: '#fff',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      '& fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#64B5F6',
                      },
                    },
                  }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: 2 }}>
                  <GlowingButton type="submit">
                    SEND
                  </GlowingButton>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      <Box
        component="footer"
        sx={{
          mt: 'auto',
          py: 3,
          textAlign: 'center',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: 'rgba(255, 255, 255, 0.7)',
          }}
        >
          © 2024 - All rights reserved, web design and development - Tetiana Zaporozhets
        </Typography>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact; 