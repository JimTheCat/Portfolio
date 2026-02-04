import { MantineProvider, Box } from '@mantine/core';
import '@mantine/core/styles.css';
import './i18n';
import { theme } from './theme';
import { useTheme } from './hooks';
import { Header, Footer } from './components';
import {
  HeroSection,
  AboutSection,
  SkillsSection,
  ExperienceSection,
  ProjectsSection,
  ContactSection, EducationSection,
} from './features';

function AppContent() {
  return (
    <Box
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header />
      <Box component="main" style={{ flex: 1, paddingTop: 70 }}>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <ContactSection />
      </Box>
      <Footer />
    </Box>
  );
}

function App() {
  const { colorScheme } = useTheme();

  return (
    <MantineProvider theme={theme} defaultColorScheme={colorScheme}>
      <AppContent />
    </MantineProvider>
  );
}

export default App;
