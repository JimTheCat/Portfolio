import {
  Box,
  Container,
  Grid,
  Text,
  Title,
  Paper,
  Button,
  Stack,
  Group,
  ThemeIcon,
  ActionIcon,
  useMantineColorScheme,
} from '@mantine/core';
import {
  IconMail,
  IconMapPin,
  IconDownload,
  IconBrandGithub,
  IconBrandLinkedin,
} from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data';
import { useLanguage } from '../../hooks';
import { getAssetPath } from '../../utils';

export const ContactSection = () => {
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();
  const { colorScheme } = useMantineColorScheme();

  const contactInfo = [
    {
      icon: IconMail,
      label: t('contact.email'),
      value: personalInfo.email,
      href: personalInfo.social.email,
    },
    {
      icon: IconMapPin,
      label: t('contact.location'),
      value: personalInfo.location[currentLanguage as 'pl' | 'en'],
      href: null,
    },
  ];

  const socialLinks = [
    { icon: IconBrandGithub, href: personalInfo.social.github, label: 'GitHub' },
    { icon: IconBrandLinkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
  ];

  return (
    <Box
      component="section"
      id="contact"
      py={100}
      style={{
        backgroundColor: colorScheme === 'dark' 
          ? 'var(--mantine-color-dark-7)' 
          : 'var(--mantine-color-gray-0)',
        backgroundImage: colorScheme === 'dark'
          ? 'linear-gradient(0deg, transparent 0%, rgba(9, 105, 255, 0.03) 100%)'
          : 'linear-gradient(0deg, transparent 0%, rgba(9, 105, 255, 0.05) 100%)',
      }}
    >
      <Container size="md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Stack gap="xs" align="center" mb={60}>
            <Title order={2} size="h1" ta="center">
              {t('contact.title')}
            </Title>
            <Text c="dimmed" size="lg" ta="center">
              {t('contact.subtitle')}
            </Text>
          </Stack>
        </motion.div>

        <Grid gutter={30}>
          {contactInfo.map((info, index) => (
            <Grid.Col key={info.label} span={{ base: 12, sm: 6 }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Paper
                  p="xl"
                  radius="md"
                  withBorder
                  component={info.href ? 'a' : 'div'}
                  href={info.href || undefined}
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    cursor: info.href ? 'pointer' : 'default',
                  }}
                  className={info.href ? 'contact-card' : undefined}
                >
                  <Group>
                    <ThemeIcon
                      size={50}
                      radius="md"
                      variant="gradient"
                      gradient={{ from: 'primary', to: 'secondary', deg: 45 }}
                    >
                      <info.icon size={26} />
                    </ThemeIcon>
                    <Box>
                      <Text size="sm" c="dimmed">
                        {info.label}
                      </Text>
                      <Text size="lg" fw={500}>
                        {info.value}
                      </Text>
                    </Box>
                  </Group>
                </Paper>
              </motion.div>
            </Grid.Col>
          ))}
        </Grid>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Paper p="xl" radius="md" withBorder mt={30}>
            <Stack align="center" gap="lg">
              <Text size="lg" fw={500}>
                {t('contact.social')}
              </Text>
              <Group gap="lg">
                {socialLinks.map((link) => (
                  <ActionIcon
                    key={link.label}
                    variant="gradient"
                    gradient={{ from: 'primary', to: 'secondary', deg: 45 }}
                    size="xl"
                    radius="md"
                    component="a"
                    href={link.href}
                    target="_blank"
                    aria-label={link.label}
                  >
                    <link.icon size={24} />
                  </ActionIcon>
                ))}
              </Group>

              <Button
                size="lg"
                variant="gradient"
                gradient={{ from: 'primary', to: 'secondary', deg: 45 }}
                leftSection={<IconDownload size={20} />}
                component="a"
                href={getAssetPath(personalInfo.cvUrl)}
                target="_blank"
                mt="md"
              >
                {t('contact.downloadCV')}
              </Button>
            </Stack>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};
