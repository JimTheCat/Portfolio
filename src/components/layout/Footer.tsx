import { Box, Container, Group, Stack, Text, ActionIcon, Divider } from '@mantine/core';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconHeart,
} from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data';

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <Box component="footer" py="xl" mt="xl">
      <Container size="xl">
        <Divider mb="xl" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Stack gap="lg" align="center">
            <Group gap="md">
              <ActionIcon
                variant="subtle"
                size="lg"
                component="a"
                href={personalInfo.social.github}
                target="_blank"
                aria-label="GitHub"
              >
                <IconBrandGithub size={22} />
              </ActionIcon>
              <ActionIcon
                variant="subtle"
                size="lg"
                component="a"
                href={personalInfo.social.linkedin}
                target="_blank"
                aria-label="LinkedIn"
              >
                <IconBrandLinkedin size={22} />
              </ActionIcon>
            </Group>

            <Text size="sm" c="dimmed" ta="center">
              © {currentYear} {personalInfo.name}. {t('footer.rights')}
            </Text>

            <Text size="xs" c="dimmed" ta="center">
              {t('footer.madeWith')}{' '}
              <IconHeart
                size={14}
                style={{ verticalAlign: 'middle', color: 'var(--mantine-color-red-5)' }}
              />{' '}
              using React, TypeScript & Mantine
            </Text>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};
