import {
  Box,
  Container,
  Grid,
  Text,
  Title,
  Paper,
  Avatar,
  Group,
  Stack,
  ThemeIcon,
} from '@mantine/core';
import { IconBriefcase, IconCode, IconRocket } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data';
import { getAssetPath } from '../../utils';

export const AboutSection = () => {
  const { t } = useTranslation();

  const stats = [
    {
      icon: IconBriefcase,
      value: personalInfo.stats.yearsOfExperience,
      label: t('about.yearsExperience'),
    },
    {
      icon: IconRocket,
      value: personalInfo.stats.projectsCompleted,
      label: t('about.projectsCompleted'),
    },
    {
      icon: IconCode,
      value: personalInfo.stats.technologiesUsed,
      label: t('about.technologiesUsed'),
    },
  ];

  return (
    <Box component="section" id="about" py={100}>
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Stack gap="xs" align="center" mb={60}>
            <Title order={2} size="h1" ta="center">
              {t('about.title')}
            </Title>
            <Text c="dimmed" size="lg" ta="center">
              {t('about.subtitle')}
            </Text>
          </Stack>
        </motion.div>

        <Grid gutter={60}>
          <Grid.Col span={{ base: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Box
                style={{
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Box
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, var(--mantine-color-primary-5), var(--mantine-color-secondary-5))',
                    borderRadius: 'var(--mantine-radius-lg)',
                    transform: 'rotate(6deg)',
                    opacity: 0.3,
                  }}
                />
                <Avatar
                  src={getAssetPath(personalInfo.avatar)}
                  alt={personalInfo.name}
                  size={280}
                  radius="lg"
                  style={{ position: 'relative', zIndex: 1 }}
                >
                  {personalInfo.name.charAt(0)}
                </Avatar>
              </Box>
            </motion.div>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 7 }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Stack gap="md">
                <Text size="lg" lh={1.8}>
                  {t('about.description1')}
                </Text>
                <Text size="lg" lh={1.8} c="dimmed">
                  {t('about.description2')}
                </Text>
                <Text size="lg" lh={1.8} c="dimmed">
                  {t('about.description3')}
                </Text>
              </Stack>
            </motion.div>
          </Grid.Col>
        </Grid>

        <Grid mt={60}>
          {stats.map((stat, index) => (
            <Grid.Col key={stat.label} span={{ base: 12, sm: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <Paper
                  p="xl"
                  radius="md"
                  withBorder
                  style={{
                    textAlign: 'center',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                  }}
                  className="stat-card"
                >
                  <Group justify="center" mb="md">
                    <ThemeIcon
                      size={50}
                      radius="md"
                      variant="gradient"
                      gradient={{ from: 'primary', to: 'secondary', deg: 45 }}
                    >
                      <stat.icon size={26} />
                    </ThemeIcon>
                  </Group>
                  <Text
                    size="2.5rem"
                    fw={700}
                    variant="gradient"
                    gradient={{ from: 'primary', to: 'secondary', deg: 45 }}
                  >
                    {stat.value}+
                  </Text>
                  <Text c="dimmed" mt="xs">
                    {stat.label}
                  </Text>
                </Paper>
              </motion.div>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
