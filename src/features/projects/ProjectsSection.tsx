import {
  Box,
  Container,
  Grid,
  Text,
  Title,
  Card,
  Badge,
  Group,
  Button,
  Stack,
  Loader,
  Anchor,
} from '@mantine/core';
import { IconBrandGithub, IconStar, IconGitFork } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data';
import { useGitHub } from '../../hooks';

export const ProjectsSection = () => {
  const { t } = useTranslation();
  const { repos, loading: githubLoading } = useGitHub();

  // Get GitHub repos
  const githubRepos = repos.slice(0, 9);

  return (
    <Box component="section" id="projects" py={100}>
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Stack gap="xs" align="center" mb={60}>
            <Title order={2} size="h1" ta="center">
              {t('projects.title')}
            </Title>
            <Text c="dimmed" size="lg" ta="center">
              {t('projects.subtitle')}
            </Text>
          </Stack>
        </motion.div>

        {/* GitHub Repos */}
        {githubLoading ? (
          <Group justify="center" py="xl">
            <Loader size="lg" />
          </Group>
        ) : githubRepos.length > 0 ? (
          <>
            <Grid gutter={20}>
              {githubRepos.map((repo, index) => (
                <Grid.Col key={repo.id} span={{ base: 12, sm: 6, md: 4 }}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    style={{ height: '100%' }}
                  >
                    <Card
                      padding="lg"
                      radius="md"
                      withBorder
                      h="100%"
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        transition: 'transform 0.2s, box-shadow 0.2s',
                      }}
                      className="project-card"
                    >
                      <Group justify="space-between" mb="xs">
                        <Anchor
                          href={repo.html_url}
                          target="_blank"
                          fw={600}
                          size="md"
                          style={{ color: 'inherit' }}
                        >
                          {repo.name}
                        </Anchor>
                        <Group gap={12}>
                          {repo.stargazers_count > 0 && (
                            <Group gap={4}>
                              <IconStar size={16} style={{ opacity: 0.7 }} />
                              <Text size="sm">{repo.stargazers_count}</Text>
                            </Group>
                          )}
                          {repo.forks_count > 0 && (
                            <Group gap={4}>
                              <IconGitFork size={16} style={{ opacity: 0.7 }} />
                              <Text size="sm">{repo.forks_count}</Text>
                            </Group>
                          )}
                        </Group>
                      </Group>

                      <Text size="sm" c="dimmed" lineClamp={3} style={{ flex: 1 }} mb="md">
                        {repo.description || t('projects.noDescription')}
                      </Text>

                      <Group gap={6} mt="auto">
                        {repo.language && (
                          <Badge variant="light" size="sm">
                            {repo.language}
                          </Badge>
                        )}
                        {repo.topics?.slice(0, 2).map((topic) => (
                          <Badge key={topic} variant="outline" size="xs">
                            {topic}
                          </Badge>
                        ))}
                      </Group>
                    </Card>
                  </motion.div>
                </Grid.Col>
              ))}
            </Grid>

            <Group justify="center" mt="xl">
              <Button
                variant="gradient"
                gradient={{ from: 'primary', to: 'secondary', deg: 45 }}
                leftSection={<IconBrandGithub size={18} />}
                component="a"
                href={personalInfo.social.github}
                target="_blank"
              >
                {t('projects.viewOnGithub')}
              </Button>
            </Group>
          </>
        ) : (
          <Text ta="center" c="dimmed">
            {t('projects.noProjects')}
          </Text>
        )}
      </Container>
    </Box>
  );
};
