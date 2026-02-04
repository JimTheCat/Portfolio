import {
  ActionIcon,
  Box,
  Burger,
  Container,
  Drawer,
  Group,
  Menu,
  Stack,
  Text,
  useMantineColorScheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconSun,
  IconMoon,
  IconLanguage,
  IconBrandGithub,
} from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useLanguage, useThemeTransition } from '../../hooks';
import { personalInfo } from '../../data';

const navItems = [
  { key: 'home', href: '#home' },
  { key: 'about', href: '#about' },
  { key: 'skills', href: '#skills' },
  { key: 'experience', href: '#experience' },
  { key: 'education', href: '#education' },
  { key: 'projects', href: '#projects' },
  { key: 'contact', href: '#contact' },
];

export const Header = () => {
  const { t } = useTranslation();
  const { colorScheme } = useMantineColorScheme();
  const { toggleWithTransition, buttonRef } = useThemeTransition();
  const { currentLanguage, setLanguage } = useLanguage();
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    closeDrawer();
  };

  return (
    <Box
      component="header"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backdropFilter: 'blur(10px)',
        backgroundColor: colorScheme === 'dark' 
          ? 'rgba(26, 27, 30, 0.8)' 
          : 'rgba(255, 255, 255, 0.8)',
        borderBottom: `1px solid ${
          colorScheme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
        }`,
      }}
    >
      <Container size="xl" py="md">
        <Group justify="space-between" align="center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Text
              size="xl"
              fw={700}
              variant="gradient"
              gradient={{ from: 'primary', to: 'secondary', deg: 45 }}
              style={{ cursor: 'pointer' }}
              onClick={() => scrollToSection('#home')}
            >
              {personalInfo.name.split(' ')[0]}
              <Text component="span" c="dimmed" fw={400}>
                .dev
              </Text>
            </Text>
          </motion.div>

          {/* Desktop Navigation */}
          <Group gap="xl" visibleFrom="sm">
            {navItems.map((item, index) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Text
                  component="a"
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  size="sm"
                  fw={500}
                  style={{
                    cursor: 'pointer',
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'color 0.2s',
                  }}
                  className="nav-link"
                >
                  {t(`nav.${item.key}`)}
                </Text>
              </motion.div>
            ))}
          </Group>

          {/* Actions */}
          <Group gap="sm">
            <ActionIcon
              ref={buttonRef}
              variant="subtle"
              size="lg"
              onClick={toggleWithTransition}
              aria-label="Toggle color scheme"
            >
              {colorScheme === 'dark' ? <IconSun size={20} /> : <IconMoon size={20} />}
            </ActionIcon>

            <Menu shadow="md" width={120}>
              <Menu.Target>
                <ActionIcon variant="subtle" size="lg" aria-label="Change language">
                  <IconLanguage size={20} />
                </ActionIcon>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item
                  onClick={() => setLanguage('pl')}
                  style={{ fontWeight: currentLanguage === 'pl' ? 700 : 400 }}
                >
                  🇵🇱 Polski
                </Menu.Item>
                <Menu.Item
                  onClick={() => setLanguage('en')}
                  style={{ fontWeight: currentLanguage === 'en' ? 700 : 400 }}
                >
                  🇬🇧 English
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>

            <ActionIcon
              variant="subtle"
              size="lg"
              component="a"
              href={personalInfo.social.github}
              target="_blank"
              aria-label="GitHub"
            >
              <IconBrandGithub size={20} />
            </ActionIcon>

            <Burger
              opened={drawerOpened}
              onClick={toggleDrawer}
              hiddenFrom="sm"
              size="sm"
            />
          </Group>
        </Group>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title={
          <Text
            size="xl"
            fw={700}
            variant="gradient"
            gradient={{ from: 'primary', to: 'secondary', deg: 45 }}
          >
            {personalInfo.name.split(' ')[0]}.dev
          </Text>
        }
        hiddenFrom="sm"
        zIndex={1000}
      >
        <Stack gap="xl" mt="xl">
          {navItems.map((item) => (
            <Text
              key={item.key}
              component="a"
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              size="lg"
              fw={500}
              style={{
                cursor: 'pointer',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              {t(`nav.${item.key}`)}
            </Text>
          ))}
        </Stack>
      </Drawer>
    </Box>
  );
};
