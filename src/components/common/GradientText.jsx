import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

// Gradient options
const gradients = {
  primary: 'linear-gradient(90deg, #FF3A8C 0%, #A373DC 50%, #5EB3F0 100%)',
  secondary: 'linear-gradient(90deg, #64B5F6 0%, #9C27B0 100%)',
  pink: 'linear-gradient(90deg, #FF3A8C 0%, #FF6AC2 100%)',
  blue: 'linear-gradient(90deg, #5EB3F0 0%, #3499DB 100%)'
};

const StyledTypography = styled(Typography)(({ gradient = 'primary', theme }) => ({
  background: gradients[gradient] || gradients.primary,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  textFillColor: 'transparent',
  display: 'inline-block'
}));

const GradientText = ({ 
  children, 
  gradient = 'primary', 
  component = 'span', 
  variant = 'body1',
  ...props 
}) => {
  return (
    <StyledTypography
      gradient={gradient}
      component={component}
      variant={variant}
      {...props}
    >
      {children}
    </StyledTypography>
  );
};

export default GradientText; 