import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer footer-center p-6 bg-base-100/90 border-t border-base-300 text-base-content">
      <aside>
        <p className="text-mono font-semibold text flex items-center flex-wrap justify-center">
          <span>This website is open-source!</span>
          <span>
            Check out the code on
            <Link
              href="https://github.com/umutto/umutto.github.io"
              className="link inline-flex items-center ml-1"
              rel="noreferrer"
            >
              GitHub
            </Link>
            .❤
          </span>
        </p>
      </aside>
    </footer>
  );
}
