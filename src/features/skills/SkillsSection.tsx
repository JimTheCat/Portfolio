import {
  Box,
  Container,
  Grid,
  Text,
  Title,
  Paper,
  Progress,
  Stack,
  Badge,
  Group,
  useMantineColorScheme,
} from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { skillsData } from '../../data';
import { useLanguage } from '../../hooks';

export const SkillsSection = () => {
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();
  const { colorScheme } = useMantineColorScheme();

  return (
    <Box
      component="section"
      id="skills"
      py={100}
      style={{
        backgroundColor: colorScheme === 'dark' 
          ? 'var(--mantine-color-dark-7)' 
          : 'var(--mantine-color-gray-0)',
        backgroundImage: colorScheme === 'dark'
          ? 'linear-gradient(180deg, transparent 0%, rgba(9, 105, 255, 0.03) 100%)'
          : 'linear-gradient(180deg, transparent 0%, rgba(9, 105, 255, 0.05) 100%)',
      }}
    >
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Stack gap="xs" align="center" mb={60}>
            <Title order={2} size="h1" ta="center">
              {t('skills.title')}
            </Title>
            <Text c="dimmed" size="lg" ta="center">
              {t('skills.subtitle')}
            </Text>
          </Stack>
        </motion.div>

        <Grid gutter={30}>
          {skillsData.map((category, categoryIndex) => (
            <Grid.Col key={category.category.en} span={{ base: 12, sm: 6 }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <Paper p="xl" radius="md" withBorder h="100%">
                  <Group mb="lg">
                    <Badge
                      size="lg"
                      variant="gradient"
                      gradient={{ from: 'primary', to: 'secondary', deg: 45 }}
                    >
                      {category.category[currentLanguage as 'pl' | 'en']}
                    </Badge>
                  </Group>

                  <Stack gap="md">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        }}
                        viewport={{ once: true }}
                      >
                        <Group justify="space-between" mb={5}>
                          <Text size="sm" fw={500}>
                            {skill.name}
                          </Text>
                          <Text size="xs" c="dimmed">
                            {skill.level}%
                          </Text>
                        </Group>
                        <Progress
                          value={skill.level}
                          size="sm"
                          radius="xl"
                          color="primary"
                          animated
                        />
                      </motion.div>
                    ))}
                  </Stack>
                </Paper>
              </motion.div>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
