import './i18n';
import { ThemeProvider } from './theme';
import { Header, Footer } from './components';
import {
  HeroSection,
  AboutSection,
  SkillsSection,
  ExperienceSection,
  EducationSection,
  ProjectsSection,
  ContactSection,
} from './features';

function App() {
  return (
    <ThemeProvider>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
