import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Paper, Text, Title, Button, useMantineTheme, rem, Image } from '@mantine/core';

export interface CardProps {
  image: string;
  title: string;
  description: string;
  custom?: JSX.Element;
}

function Card({ image, title, description, custom }: CardProps) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
    >
      <div>
        <Image src={image} alt={title} />
        <Text size="xs">
          {title}
        </Text>
        <Title order={3}>
          {description}
        </Title>
        {custom}
      </div>
      <Button variant="white" color="dark">
        Read article
      </Button>
    </Paper>
  );
}


export default function CardsCarousel({ data }: { data: CardProps[] }) {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize={{ base: '100%', sm: '50%' }}
      slideGap={{ base: rem(2), sm: 'xl' }}
      align="start"
      slidesToScroll={mobile ? 1 : 2}
    >
      {slides}
    </Carousel>
  );
}