import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}></NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={<>{'stay connected with your friends through casual calls'}</>}
        description="friend phone makes it easy to stay connected with the people you care about"
        // button={
        //   <Link href="https://creativedesignsguru.com/category/nextjs/">
        //     <Button xl>Download Your Free Theme</Button>
        //   </Link>
        // }
      />
    </Section>
  </Background>
);

export { Hero };
