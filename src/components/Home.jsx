import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import GlowingButton from './common/GlowingButton';

const Home = () => {
  return (
    <Box
      component="main"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #0B1221 60%, #162033 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ flex: 1, maxWidth: '600px' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h1"
                sx={{
                  mb: 4,
                  fontSize: { xs: '3rem', md: '5rem' },
                  background: 'linear-gradient(45deg, #FF69B4, #9370DB)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 'bold',
                  letterSpacing: '0.02em',
                  lineHeight: 1.2,
                }}
              >
                FRONTEND
                <br />
                DEVELOPER
              </Typography>

              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    color: '#B0B7C9',
                    mb: 1,
                  }}
                >
                  I am Harsh —{' '}
                  <Box
                    component="span"
                    sx={{
                      color: '#64B5F6',
                      textDecoration: 'none',
                    }}
                  >
                    web-developer
                  </Box>
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: '#B0B7C9',
                  }}
                >
                  with a passion for creating beautiful and responsive websites.
                </Typography>
              </Box>

              <GlowingButton component={RouterLink} to="/projects">
                VIEW MY WORK
              </GlowingButton>
            </motion.div>
          </Box>

          <Box
            sx={{
              flex: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            <Box
              component="img"
              src="/path-to-your-image.jpg"
              alt="Tetiana Zaporozhets"
              sx={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '20px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home; 