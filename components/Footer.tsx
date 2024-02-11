import Link from "next/link";

export type FooterProps = {
  className?: string;
};

const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={`footer text-xs text-muted ${className}`}>
      <aside className="w-full max-w-screen-xl mx-auto place-items-center text-center">
        <p className="leading-tight">
          Designed & built with 💖 by{" "}
          <a href="https://www.linkedin.com/in/tcheong/" className="link-hover">
            Tony Cheong
          </a>
        </p>
        <p className="leading-tight">
          Powered by{" "}
          <a href="https://nextjs.org" target="_blank" className="link-hover">
            Next.js
          </a>
          ,{" "}
          <a
            href="https://tailwindcss.com"
            target="_blank"
            className="link-hover"
          >
            TailwindCSS
          </a>
          ,{" "}
          <a href="https://daisyui.com" target="_blank" className="link-hover">
            daisyUI
          </a>
          ,{" "}
          <a
            href="https://aws.amazon.com/s3/"
            target="_blank"
            className="link-hover"
          >
            Amazon S3
          </a>
          , and{" "}
          <a
            href="https://aws.amazon.com/cloudfront/"
            target="_blank"
            className="link-hover"
          >
            CloudFront
          </a>
          .
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
