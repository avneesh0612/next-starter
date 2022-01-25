import Image from "next/image";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="flex h-24 w-full items-center justify-center border-t">
      <a
        className="flex items-center justify-center"
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{" "}
        <Image
          width={100}
          height={60}
          objectFit="contain"
          src="/vercel.svg"
          alt="Vercel Logo"
        />
      </a>
    </footer>
  );
};

export default Footer;
