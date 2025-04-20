import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import WebIcon from '@mui/icons-material/Web';
import GradientText from './common/GradientText';

const Services = () => {
  const services = [
    {
      icon: <DesktopWindowsOutlinedIcon sx={{ fontSize: 40, color: '#64B5F6' }} />,
      title: 'Website Development',
      description: "I create websites based on your ready-made design. Whether it's a landing page or a business card website, I will make it look great and work smoothly on any device.",
    },
    {
      icon: <BrushOutlinedIcon sx={{ fontSize: 40, color: '#64B5F6' }} />,
      title: 'Web Design',
      description: 'I can design your website from scratch. I create modern, simple, and user-friendly designs that match your brand and goals.',
    },
    {
      icon: <WebIcon sx={{ fontSize: 40, color: '#64B5F6' }} />,
      title: 'WordPress Development',
      description: "I build websites on WordPress, making them easy to update and manage. It's a great choice for blogs, small businesses, or portfolios.",
    },
  ];

  return (
    <Box
      id="services"
      component="section"
      sx={{
        py: 8,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #0B1221 0%, #162033 100%)',
        position: 'relative',
        scrollMarginTop: '64px',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <GradientText
            variant="h2"
            component="h2"
            sx={{
              mb: 8,
              fontWeight: 800,
              letterSpacing: '0.05em',
              textAlign: 'left',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
            }}
          >
            MY SERVICES
          </GradientText>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              position: 'relative',
            }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Box
                  sx={{
                    p: 4,
                    borderRadius: '16px',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    ml: index === 1 ? { xs: 0, md: 'auto' } : 0,
                    mr: index === 1 ? { xs: 0, md: 0 } : 'auto',
                    maxWidth: '600px',
                    position: 'relative',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      transform: 'translateY(-5px)',
                      transition: 'all 0.3s ease-in-out',
                    },
                  }}
                >
                  <Box sx={{ mb: 2 }}>{service.icon}</Box>
                  <Typography
                    variant="h4"
                    sx={{
                      mb: 2,
                      color: '#fff',
                      fontWeight: 'medium',
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontSize: '1.1rem',
                      lineHeight: 1.6,
                    }}
                  >
                    {service.description}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Services; 