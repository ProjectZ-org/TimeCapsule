import {ThemeToggle} from "..";

function Footer() {
  return (
    <footer className="flex fleex-row items-center w-full max-h-10 py-4 bg-gray-50 dark:bg-neutral-800 border-t border-gray-200 dark:border-neutral-700 text-center">
      <p className="text-black dark:text-white w-50 text-xs">© 2025 <a className="hover:underline" href="https://mail.google.com/mail/u/2/#inbox?compose=GTvVlcSGLCDjtLlzfDMwMzLNPbZjzQpDXpzMjwTwSdtbQQplfbHvFQPmXrCtkGPvnqPvsSfzbnJvV">tusharbhatt</a></p>
      <ThemeToggle />
    </footer>
  );
}

export default Footer