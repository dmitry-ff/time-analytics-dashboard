import { AppShell, Button, Flex, getGradient, useMantineTheme, Text, Stack } from '@mantine/core';
import { useNavigate } from 'react-router';
import { paths } from '../../config/paths';

const LandingRoute = () => {
  const theme = useMantineTheme();
  const navigate = useNavigate();

  const backgroundColor = getGradient({ deg: 135, from: 'blue.1', to: 'gray.0' }, theme);

  const handleStart = () => {
    //TODO: добавить проверку авторизации
    navigate(paths.auth.login.getHref());
  };

  return (
    <AppShell>
      <AppShell.Main bg={backgroundColor}>
        <Flex h="100vh" align="center" justify="center">
          <Stack>
            <Text w={600} fz="xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at sapien a ex
              molestie dignissim sit amet quis risus. Vivamus eleifend finibus libero, vel malesuada
              massa gravida nec. Suspendisse sit amet egestas neque. Pellentesque venenatis suscipit
              iaculis. Maecenas luctus, lorem ultricies sagittis varius, eros purus ultricies lorem,
              ac bibendum nunc urna convallis quam. Sed varius eget diam eget malesuada. Mauris in
              maximus ligula, id sodales lectus. Donec nec orci viverra, finibus sem sit amet,
              rutrum diam. Nulla finibus semper fermentum.
            </Text>
            <Button size="xl" onClick={handleStart}>
              Начать
            </Button>
          </Stack>
        </Flex>
      </AppShell.Main>
    </AppShell>
  );
};

export default LandingRoute;
