import Link from "next/link";
import {RiGithubLine, RiInstagramLine, RiTwitterLine,
RiLinkedinLine, RiDiscordLine, RiRedditLine} from 'react-icons/ri';
const Socials = () => {
  return (
  <div className="flex items-center gap-x-5 text-lg">
    <Link href={'https://github.com/NareshGarfield'} className="hover:text-accent transition-all duration-300">
      <RiGithubLine />
    </Link>
    <Link href={'https://instagram.com/ifrit.n?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D'} className="hover:text-accent transition-all duration-300">
      <RiInstagramLine />
    </Link>
    <Link href={'https://twitter.com/stellarpheonix'} className="hover:text-accent transition-all duration-300">
      <RiTwitterLine />
    </Link>
    <Link href={'https://www.linkedin.com/in/nareshk-s/'} className="hover:text-accent transition-all duration-300">
      <RiLinkedinLine />
    </Link>
    <Link href={'https://discord.com/channels/nareshgarfield'} className="hover:text-accent transition-all duration-300">
      <RiDiscordLine />
    </Link>
    <Link href={'https://www.reddit.com/u/Prize_Hunter22?utm_source=share&utm_medium=android_app&utm_name=androidcss&utm_term=1&utm_content=share_button'}
    className="hover:text-accent transition-all duration-300">
      <RiRedditLine />
    </Link>
  </div>
  );
};

export default Socials;
