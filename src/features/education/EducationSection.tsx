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
import { IconSchool, IconMapPin, IconCalendar } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { educationData } from '../../data';
import { useLanguage } from '../../hooks';

export const EducationSection = () => {
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();
  const locale = currentLanguage as 'pl' | 'en';

  const formatYear = (date: string) => {
    return date.split('-')[0];
  };

  const formatDateRange = (startDate: string, endDate: string | null) => {
    const start = formatYear(startDate);
    const end = endDate ? formatYear(endDate) : t('education.inProgress');
    return `${start} - ${end}`;
  };

  return (
    <Box component="section" id="education" py={100}>
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Stack gap="xs" align="center" mb={60}>
            <Title order={2} size="h1" ta="center">
              {t('education.title')}
            </Title>
            <Text c="dimmed" size="lg" ta="center">
              {t('education.subtitle')}
            </Text>
          </Stack>
        </motion.div>

        <Timeline active={educationData.length} bulletSize={40} lineWidth={2}>
          {educationData.map((edu, index) => (
            <Timeline.Item
              key={edu.id}
              bullet={
                <ThemeIcon
                  size={40}
                  radius="xl"
                  variant="gradient"
                  gradient={{ from: 'primary', to: 'secondary', deg: 45 }}
                >
                  <IconSchool size={20} />
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
                        src={edu.logo}
                        alt={edu.institution}
                        size={50}
                        radius="md"
                        color="primary"
                      >
                        {edu.institution.charAt(0)}
                      </Avatar>
                      <Box>
                        <Title order={4} size="h5">
                          {edu.degree[locale]} - {edu.field[locale]}
                        </Title>
                        <Text fw={500} c="primary">
                          {edu.institution}
                        </Text>
                      </Box>
                    </Group>
                    <Badge
                      variant="light"
                      color={edu.status === 'in-progress' ? 'blue' : 'green'}
                    >
                      {edu.status === 'in-progress'
                        ? t('education.inProgress')
                        : t('education.completed')}
                    </Badge>
                  </Group>

                  <Group gap="lg" mb="md">
                    <Group gap={6}>
                      <IconCalendar size={16} style={{ opacity: 0.7 }} />
                      <Text size="sm" c="dimmed">
                        {formatDateRange(edu.startDate, edu.endDate)}
                      </Text>
                    </Group>
                    <Group gap={6}>
                      <IconMapPin size={16} style={{ opacity: 0.7 }} />
                      <Text size="sm" c="dimmed">
                        {edu.location[locale]}
                      </Text>
                    </Group>
                  </Group>

                  {edu.description && (
                    <Text size="sm" c="dimmed" style={{ whiteSpace: 'pre-line' }}>
                      {edu.description[locale]}
                    </Text>
                  )}
                </Card>
              </motion.div>
            </Timeline.Item>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
};
