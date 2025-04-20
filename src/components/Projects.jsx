import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button } from '@mui/material';
import { motion } from 'framer-motion';
import GradientText from './common/GradientText';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Website',
      description: 'A fully responsive e-commerce website with product filtering, cart functionality, and payment integration.',
      image: 'https://source.unsplash.com/random/600x400/?ecommerce',
      technologies: ['React', 'Redux', 'Material-UI', 'Node.js'],
      demoLink: '#',
      codeLink: '#',
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'A modern portfolio website with smooth animations and responsive design.',
      image: 'https://source.unsplash.com/random/600x400/?portfolio',
      technologies: ['React', 'Framer Motion', 'Material-UI'],
      demoLink: '#',
      codeLink: '#',
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A drag-and-drop task management application with user authentication and data persistence.',
      image: 'https://source.unsplash.com/random/600x400/?task',
      technologies: ['React', 'Firebase', 'Material-UI'],
      demoLink: '#',
      codeLink: '#',
    },
  ];

  return (
    <Box
      id="portfolio"
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
            PORTFOLIO
          </GradientText>

          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} lg={4} key={project.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '16px',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      overflow: 'hidden',
                      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                        '& .MuiCardMedia-root': {
                          transform: 'scale(1.05)',
                        },
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={project.image}
                      alt={project.title}
                      sx={{
                        transition: 'transform 0.6s ease-in-out',
                      }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography
                        variant="h5"
                        component="h3"
                        sx={{
                          mb: 1,
                          color: '#fff',
                          fontWeight: 600,
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          mb: 2,
                          color: 'rgba(255, 255, 255, 0.7)',
                        }}
                      >
                        {project.description}
                      </Typography>
                      <Box
                        sx={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: 1,
                          mb: 2,
                        }}
                      >
                        {project.technologies.map((tech) => (
                          <Box
                            key={tech}
                            sx={{
                              px: 1.5,
                              py: 0.5,
                              bgcolor: 'rgba(100, 181, 246, 0.1)',
                              borderRadius: '15px',
                              color: '#64B5F6',
                              fontSize: '0.75rem',
                              fontWeight: 500,
                            }}
                          >
                            {tech}
                          </Box>
                        ))}
                      </Box>
                    </CardContent>
                    <CardActions sx={{ p: 2 }}>
                      <Button
                        size="small"
                        href={project.demoLink}
                        target="_blank"
                        sx={{
                          color: '#fff',
                          borderRadius: '20px',
                          bgcolor: 'rgba(100, 181, 246, 0.1)',
                          px: 2,
                          '&:hover': {
                            bgcolor: 'rgba(100, 181, 246, 0.2)',
                          },
                        }}
                      >
                        Live Demo
                      </Button>
                      <Button
                        size="small"
                        href={project.codeLink}
                        target="_blank"
                        sx={{
                          color: '#fff',
                          borderRadius: '20px',
                          bgcolor: 'rgba(255, 58, 140, 0.1)',
                          px: 2,
                          '&:hover': {
                            bgcolor: 'rgba(255, 58, 140, 0.2)',
                          },
                        }}
                      >
                        View Code
                      </Button>
                    </CardActions>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects; 