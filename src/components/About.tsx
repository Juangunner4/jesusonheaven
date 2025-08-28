import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const AboutContainer = styled(Box)(({ theme }) => ({
  backgroundColor: 'transparent',
  padding: '40px 0',
  position: 'relative',
}));

const AboutContent = styled(Container)({
  backgroundColor: 'transparent',
  padding: '20px',
  maxWidth: '1000px',
  margin: '0 auto',
});

const SectionTitle = styled(Typography)({
  color: '#000000',
  fontSize: '2.5rem',
  fontWeight: 700,
  marginBottom: '32px',
  fontFamily: 'Helvetica Now, Helvetica, Arial, sans-serif',
  textAlign: 'center',
  textShadow: '2px 2px 4px rgba(255, 255, 255, 0.8)',
});

const LaunchInfo = styled(Typography)({
  color: '#000000',
  fontSize: '1.2rem',
  fontWeight: 600,
  marginBottom: '48px',
  backgroundColor: 'transparent',
  padding: '16px 24px',
  borderRadius: '12px',
  display: 'inline-block',
  textAlign: 'center',
  textShadow: '2px 2px 4px rgba(255, 255, 255, 0.9)',
});

const TeachingSection = styled(Box)({
  textAlign: 'left',
  marginBottom: '32px',
  backgroundColor: 'transparent',
  padding: '20px',
  borderRadius: '12px',
});

const TeachingTitle = styled(Typography)({
  color: '#000000',
  fontSize: '1.5rem',
  fontWeight: 600,
  marginBottom: '16px',
  textAlign: 'center',
  fontFamily: 'Helvetica Now, Helvetica, Arial, sans-serif',
  textShadow: '2px 2px 4px rgba(255, 255, 255, 0.9)',
});

const TeachingSubtitle = styled(Typography)({
  color: '#000000',
  fontSize: '1.2rem',
  fontWeight: 600,
  marginBottom: '8px',
  marginTop: '16px',
  textShadow: '2px 2px 4px rgba(255, 255, 255, 0.9)',
});

const TeachingText = styled(Typography)({
  color: '#000000',
  fontSize: '1rem',
  lineHeight: 1.6,
  marginBottom: '12px',
  textShadow: '1px 1px 3px rgba(255, 255, 255, 0.8)',
});

const IntroText = styled(Typography)({
  color: '#000000',
  fontSize: '1.1rem',
  lineHeight: 1.7,
  marginBottom: '40px',
  maxWidth: '800px',
  margin: '0 auto 40px auto',
  textAlign: 'center',
  textShadow: '2px 2px 4px rgba(255, 255, 255, 0.9)',
  backgroundColor: 'transparent',
  padding: '20px',
  borderRadius: '12px',
});

export const About: React.FC = () => {
  return (
    <AboutContainer id="about">
      <AboutContent>
        <SectionTitle>About $JESUS</SectionTitle>
        
        <Box sx={{ textAlign: 'center', marginBottom: '40px' }}>
          <LaunchInfo>
            $JESUS was launched on 23:21:54 Aug 21, 2025 on HeavenDex
          </LaunchInfo>
        </Box>
        
        <IntroText>
          Jesus' most important teachings center on loving God with all your being and loving your neighbor as yourself, 
          often referred to as the "Golden Rule". Key themes include love, compassion, forgiveness for enemies, humility, 
          service to others, and seeking the Kingdom of God before worldly possessions. He also emphasized having faith in God, 
          repentance for sins, and a willingness to sacrifice oneself for others.
        </IntroText>

        <TeachingSection>
          <TeachingTitle>The Greatest Commandment</TeachingTitle>
          
          <TeachingSubtitle>Love God:</TeachingSubtitle>
          <TeachingText>
            "You shall love the Lord your God with all your heart, and with all your soul, and with all your mind".
          </TeachingText>
          
          <TeachingSubtitle>Love Your Neighbor:</TeachingSubtitle>
          <TeachingText>
            "Love your neighbor as yourself" is the second great commandment. Jesus stated that all the Law and the Prophets hang on these two commands.
          </TeachingText>
        </TeachingSection>

        <TeachingSection>
          <TeachingTitle>Core Principles</TeachingTitle>
          
          <TeachingSubtitle>Love and Compassion:</TeachingSubtitle>
          <TeachingText>
            Be merciful and compassionate to others, especially the less fortunate, as God is merciful.
          </TeachingText>
          
          <TeachingSubtitle>Forgiveness:</TeachingSubtitle>
          <TeachingText>
            Forgive those who wrong you, even your enemies.
          </TeachingText>
          
          <TeachingSubtitle>Humility and Service:</TeachingSubtitle>
          <TeachingText>
            Serve others humbly and sacrificially, recognizing that your needs are not as important as the needs of others.
          </TeachingText>
          
          <TeachingSubtitle>The Kingdom of God:</TeachingSubtitle>
          <TeachingText>
            Focus on seeking God's kingdom first and do not worry about material things like food and clothing.
          </TeachingText>
        </TeachingSection>

        <TeachingSection>
          <TeachingTitle>Actionable Teachings</TeachingTitle>
          
          <TeachingSubtitle>Have Faith:</TeachingSubtitle>
          <TeachingText>
            Trust in God and seek His guidance in your life.
          </TeachingText>
          
          <TeachingSubtitle>Repent and Believe:</TeachingSubtitle>
          <TeachingText>
            Turn away from your sins and believe in the gospel.
          </TeachingText>
          
          <TeachingSubtitle>Follow and Sacrifice:</TeachingSubtitle>
          <TeachingText>
            Take up your cross daily to follow Jesus, which involves denying yourself and being willing to die for others.
          </TeachingText>
          
          <TeachingSubtitle>Make Disciples:</TeachingSubtitle>
          <TeachingText>
            Teach others and baptize them in the name of God.
          </TeachingText>
        </TeachingSection>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
