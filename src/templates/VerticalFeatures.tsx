import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="how it works"
    description="add friends to your list, click connect, and chat with the first to answer. enjoy 10-minute calls with conversation starters."
  >
    <VerticalFeatureRow
      title="smart dialing"
      description="just one click and friend phone handles the rest, ensuring you connect to a friend without hassle"
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="timed chats"
      description="with a 10-minute cap, conversations stay fresh without dragging on"
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="conversation starters"
      description="curated questions help reignite conversations, especially with friends you've missed for a while"
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
