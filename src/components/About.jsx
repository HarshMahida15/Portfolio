import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    'JavaScript (ES6+)',
    'React.js',
    'Node.js',
    'TypeScript',
    'Python',
    'SQL',
    'Git',
    'AWS',
    'Docker',
    'CI/CD',
  ];

  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'Company Name',
      period: '2020 - Present',
      description: 'Led development of key features and mentored junior developers.',
    },
    {
      title: 'Software Engineer',
      company: 'Previous Company',
      period: '2018 - 2020',
      description: 'Developed and maintained multiple web applications.',
    },
  ];

  return (
    <Box
      component="main"
      sx={{
        minHeight: '100vh',
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 6,
              color: 'primary.main',
            }}
          >
            About Me
          </Typography>

          <Typography
            variant="h5"
            sx={{
              mb: 4,
              color: 'text.secondary',
            }}
          >
            I'm a passionate software engineer with a strong foundation in web development
            and a keen interest in creating scalable, maintainable applications.
            With several years of experience in the industry, I've worked on various
            projects ranging from small business websites to large-scale enterprise applications.
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  height: '100%',
                  backgroundColor: 'background.paper',
                }}
              >
                <Typography variant="h4" sx={{ mb: 3, color: 'primary.main' }}>
                  Skills
                </Typography>
                <Grid container spacing={2}>
                  {skills.map((skill) => (
                    <Grid item xs={6} key={skill}>
                      <Typography
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          color: 'text.secondary',
                        }}
                      >
                        • {skill}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  height: '100%',
                  backgroundColor: 'background.paper',
                }}
              >
                <Typography variant="h4" sx={{ mb: 3, color: 'primary.main' }}>
                  Experience
                </Typography>
                {experiences.map((exp, index) => (
                  <Box key={index} sx={{ mb: 3 }}>
                    <Typography variant="h6" sx={{ color: 'text.primary' }}>
                      {exp.title}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: 'primary.main' }}>
                      {exp.company}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                      {exp.period}
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                      {exp.description}
                    </Typography>
                  </Box>
                ))}
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About; 