import { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LanguageSelector from './common/LanguageSelector';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('/');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const menuItems = [
    { name: 'SERVICES', path: '/#services' },
    { name: 'TECHNOLOGIES', path: '/#technologies' },
    { name: 'PORTFOLIO', path: '/#portfolio' },
    { name: 'CONTACT', path: '/#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Check which section is currently in view
      const sections = ['services', 'technologies', 'portfolio', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(`/#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleNavClick = (path) => {
    setDrawerOpen(false);
    const element = document.getElementById(path.replace('/#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: 'transparent',
        backdropFilter: 'none',
        boxShadow: 'none',
        mt: 2,
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            backgroundColor: 'rgba(11, 18, 33, 0.7)',
            backdropFilter: 'blur(10px)',
            borderRadius: '50px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Toolbar
            disableGutters
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              px: 4,
              py: 1.5,
            }}
          >
            {/* Logo/Name */}
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: 700,
                letterSpacing: '0.05em',
                color: '#fff',
                fontSize: { xs: '1rem', sm: '1.25rem' },
                whiteSpace: 'nowrap',
              }}
            >
              HARSH MAHIDA
            </Typography>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: { md: 3, lg: 4 },
                }}
              >
                {menuItems.map((item) => (
                  <Button
                    key={item.name}
                    onClick={() => handleNavClick(item.path)}
                    sx={{
                      fontWeight: 500,
                      fontSize: '0.875rem',
                      color: activeSection === item.path ? '#64B5F6' : 'rgba(255, 255, 255, 0.7)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      '&:hover': {
                        color: '#64B5F6',
                        backgroundColor: 'transparent',
                      },
                    }}
                  >
                    {item.name}
                  </Button>
                ))}
              </Box>
            )}

            {/* Language Selector */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <LanguageSelector currentLang="en" />

              {/* Mobile Menu Toggle */}
              {isMobile && (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerToggle}
                  sx={{ ml: 1 }}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Box>

            {/* Mobile Drawer */}
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={handleDrawerToggle}
              sx={{
                '& .MuiDrawer-paper': {
                  width: '100%',
                  maxWidth: '300px',
                  backgroundColor: 'rgba(11, 18, 33, 0.95)',
                  backdropFilter: 'blur(10px)',
                  borderLeft: '1px solid rgba(255, 255, 255, 0.05)',
                  boxSizing: 'border-box',
                  padding: '2rem 1rem',
                },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  padding: '0 1rem 1rem 1rem',
                }}
              >
                <IconButton
                  onClick={handleDrawerToggle}
                  sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
              <List>
                {menuItems.map((item) => (
                  <ListItem key={item.name} disablePadding>
                    <ListItemButton
                      onClick={() => handleNavClick(item.path)}
                      sx={{
                        py: 1.5,
                        color: activeSection === item.path ? '#64B5F6' : 'rgba(255, 255, 255, 0.7)',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          color: '#64B5F6',
                        },
                      }}
                    >
                      <ListItemText
                        primary={item.name}
                        primaryTypographyProps={{
                          fontWeight: 500,
                          fontSize: '1rem',
                          letterSpacing: '0.05em',
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </Toolbar>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Navbar; 