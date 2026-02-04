import { Box, Button, Container, Group, Text, Title, Stack } from '@mantine/core';
import { IconDownload, IconArrowDown } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data';
import { useTypewriter } from '../../hooks';

export const HeroSection = () => {
  const { t } = useTranslation();
  
  const { text } = useTypewriter({
    words: personalInfo.rolePrefixes,
    typeSpeed: 80,
    deleteSpeed: 40,
    delayBetweenWords: 2500,
  });

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <Box
      component="section"
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated background elements */}
      <Box
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: 'hidden',
          zIndex: 0,
        }}
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            position: 'absolute',
            top: '10%',
            right: '10%',
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--mantine-color-primary-3) 0%, var(--mantine-color-secondary-3) 100%)',
            opacity: 0.1,
            filter: 'blur(60px)',
          }}
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            position: 'absolute',
            bottom: '10%',
            left: '5%',
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--mantine-color-secondary-4) 0%, var(--mantine-color-primary-4) 100%)',
            opacity: 0.1,
            filter: 'blur(50px)',
          }}
        />
      </Box>

      <Container size="lg" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Stack gap="xl" align="center" ta="center">
            <motion.div variants={itemVariants}>
              <Text size="lg" c="dimmed" mb="xs">
                {t('hero.greeting')}
              </Text>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Title
                order={1}
                size="4rem"
                fw={800}
                style={{ lineHeight: 1.1 }}
              >
                {personalInfo.name}
              </Title>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Text
                size="xl"
                fw={600}
                variant="gradient"
                gradient={{ from: 'primary', to: 'secondary', deg: 45 }}
                style={{ minHeight: '1.5em' }}
              >
                {text}
                <Box
                  component="span"
                  style={{
                    display: 'inline-block',
                    width: '3px',
                    height: '1.2em',
                    marginLeft: '2px',
                    marginRight: '6px',
                    verticalAlign: 'text-bottom',
                    background: 'linear-gradient(45deg, var(--mantine-color-primary-5), var(--mantine-color-secondary-5))',
                    animation: 'blink 1s step-end infinite',
                  }}
                />
                {personalInfo.roleSuffix}
              </Text>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Text size="lg" c="dimmed" maw={600}>
                {t('hero.description')}
              </Text>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Group gap="md" mt="xl">
                <Button
                  size="lg"
                  variant="gradient"
                  gradient={{ from: 'primary', to: 'secondary', deg: 45 }}
                  onClick={scrollToProjects}
                  rightSection={<IconArrowDown size={18} />}
                >
                  {t('hero.cta')}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  component="a"
                  href={personalInfo.cvUrl}
                  target="_blank"
                  leftSection={<IconDownload size={18} />}
                >
                  {t('hero.downloadCV')}
                </Button>
              </Group>
            </motion.div>
          </Stack>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          style={{
            position: 'absolute',
            bottom: '-80px',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <IconArrowDown size={24} style={{ opacity: 0.5 }} />
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};
