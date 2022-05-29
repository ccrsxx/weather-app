export function Footer() {
  return (
    <footer className='mb-4 text-lg text-[rgba(255,255,255,0.8)] sm:mb-0'>
      <p>
        Made with{' '}
        <span role='img' aria-label='heart'>
          ❤️{' '}
        </span>
        by{' '}
        <a
          className='rounded px-0.5 decoration-transparent underline-offset-2 
                     transition-all duration-300 hover:underline hover:decoration-pink-200 
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white'
          href='https://github.com/ccrsxx'
        >
          ccrsxx
        </a>
      </p>
    </footer>
  );
}
