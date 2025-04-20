import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import GradientText from './common/GradientText';

// Technology icons
import htmlIcon from '../assets/icons/html5.svg';
import cssIcon from '../assets/icons/css3.svg';
import jsIcon from '../assets/icons/javascript.svg';
import reactIcon from '../assets/icons/react.svg';
import nextIcon from '../assets/icons/nextjs.svg';
import tailwindIcon from '../assets/icons/tailwindcss.svg';
import webpackIcon from '../assets/icons/webpack.svg';
import gitIcon from '../assets/icons/git.svg';
import wordpressIcon from '../assets/icons/wordpress.svg';
import figmaIcon from '../assets/icons/figma.svg';

const Skills = () => {
  // First row of technologies
  const topRowTech = [
    { name: 'HTML5', icon: htmlIcon, alt: 'HTML5 logo' },
    { name: 'CSS3', icon: cssIcon, alt: 'CSS3 logo' },
    { name: 'JavaScript', icon: jsIcon, alt: 'JavaScript logo' },
    { name: 'TailwindCSS', icon: tailwindIcon, alt: 'Tailwind CSS logo' },
    { name: 'Next.js', icon: nextIcon, alt: 'Next.js logo' },
  ];

  // Second row of technologies
  const bottomRowTech = [
    { name: 'React', icon: reactIcon, alt: 'React logo' },
    { name: 'Webpack', icon: webpackIcon, alt: 'Webpack logo' },
    { name: 'Git', icon: gitIcon, alt: 'Git logo' },
    { name: 'WordPress', icon: wordpressIcon, alt: 'WordPress logo' },
    { name: 'Figma', icon: figmaIcon, alt: 'Figma logo' },
  ];

  return (
    <Box
      id="technologies"
      component="section"
      sx={{
        py: 12,
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
              mb: 6,
              fontWeight: 800,
              letterSpacing: '0.05em',
              textAlign: 'left',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
            }}
          >
            SKILLS
          </GradientText>

          <Typography
            variant="h3"
            component="h3"
            align="center"
            sx={{
              color: '#fff',
              mb: 8,
              fontSize: { xs: '1.5rem', md: '2rem' },
              fontWeight: 400,
            }}
          >
            The skills, tools and technologies I use:
          </Typography>

          <Box sx={{ py: 4 }}>
            {/* First row */}
            <Box 
              sx={{ 
                display: 'flex', 
                justifyContent: 'center',
                gap: { xs: 2, sm: 4, md: 6 },
                mb: 8
              }}
            >
              {topRowTech.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Box
                      component="img"
                      src={tech.icon}
                      alt={tech.alt}
                      sx={{
                        height: { xs: 50, sm: 60, md: 70 },
                        width: { xs: 50, sm: 60, md: 70 },
                        mb: 2,
                        transition: 'transform 0.3s ease',
                        filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.2))',
                        '&:hover': {
                          transform: 'scale(1.1)',
                          filter: 'drop-shadow(0 0 12px rgba(255, 255, 255, 0.4))',
                        },
                      }}
                    />
                  </Box>
                </motion.div>
              ))}
            </Box>

            {/* Second row */}
            <Box 
              sx={{ 
                display: 'flex', 
                justifyContent: 'center',
                gap: { xs: 2, sm: 4, md: 6 }
              }}
            >
              {bottomRowTech.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Box
                      component="img"
                      src={tech.icon}
                      alt={tech.alt}
                      sx={{
                        height: { xs: 50, sm: 60, md: 70 },
                        width: { xs: 50, sm: 60, md: 70 },
                        mb: 2,
                        transition: 'transform 0.3s ease',
                        filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.2))',
                        '&:hover': {
                          transform: 'scale(1.1)',
                          filter: 'drop-shadow(0 0 12px rgba(255, 255, 255, 0.4))',
                        },
                      }}
                    />
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills; 