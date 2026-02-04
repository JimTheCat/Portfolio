import {
  Box,
  Container,
  Text,
  Title,
  Card,
  Badge,
  Group,
  Stack,
  Avatar,
  Timeline,
  ThemeIcon,
} from '@mantine/core';
import { IconBriefcase, IconMapPin, IconCalendar } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { experienceData, formatDateRange, calculateDuration } from '../../data';
import { useLanguage } from '../../hooks';
import { getAssetPath } from '../../utils';

export const ExperienceSection = () => {
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();
  const locale = currentLanguage as 'pl' | 'en';

  return (
    <Box component="section" id="experience" py={100}>
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Stack gap="xs" align="center" mb={60}>
            <Title order={2} size="h1" ta="center">
              {t('experience.title')}
            </Title>
            <Text c="dimmed" size="lg" ta="center">
              {t('experience.subtitle')}
            </Text>
          </Stack>
        </motion.div>

        <Timeline active={experienceData.length} bulletSize={40} lineWidth={2}>
          {experienceData.map((exp, index) => (
            <Timeline.Item
              key={exp.id}
              bullet={
                <ThemeIcon
                  size={40}
                  radius="xl"
                  variant="gradient"
                  gradient={{ from: 'primary', to: 'secondary', deg: 45 }}
                >
                  <IconBriefcase size={20} />
                </ThemeIcon>
              }
            >
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  shadow="sm"
                  padding="lg"
                  radius="md"
                  withBorder
                  ml="md"
                  style={{
                    transition: 'transform 0.2s, box-shadow 0.2s',
                  }}
                  className="project-card"
                >
                  <Group justify="space-between" wrap="nowrap" gap="md" mb="md">
                    <Group gap="md" wrap="nowrap">
                      <Avatar
                        src={exp.logo ? getAssetPath(exp.logo) : undefined}
                        alt={exp.company}
                        size={50}
                        radius="md"
                        color="primary"
                      >
                        {exp.company.charAt(0)}
                      </Avatar>
                      <Box>
                        <Title order={4} size="h5">
                          {exp.position[locale]}
                        </Title>
                        <Text fw={500} c="primary">
                          {exp.company}
                        </Text>
                      </Box>
                    </Group>
                    <Badge
                      variant="light"
                      color={exp.endDate === null ? 'green' : 'gray'}
                    >
                      {exp.endDate === null ? t('experience.current') : t(`experience.${exp.type}`)}
                    </Badge>
                  </Group>

                  <Group gap="lg" mb="md">
                    <Group gap={6}>
                      <IconCalendar size={16} style={{ opacity: 0.7 }} />
                      <Text size="sm" c="dimmed">
                        {formatDateRange(exp.startDate, exp.endDate, locale)}
                      </Text>
                      <Text size="xs" c="dimmed">
                        ({calculateDuration(exp.startDate, exp.endDate, locale)})
                      </Text>
                    </Group>
                    <Group gap={6}>
                      <IconMapPin size={16} style={{ opacity: 0.7 }} />
                      <Text size="sm" c="dimmed">
                        {exp.location[locale]}
                      </Text>
                    </Group>
                  </Group>

                  <Text size="sm" c="dimmed" mb="md" style={{ whiteSpace: 'pre-line' }}>
                    {exp.description[locale]}
                  </Text>

                  <Group gap={6}>
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </Group>
                </Card>
              </motion.div>
            </Timeline.Item>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
};
