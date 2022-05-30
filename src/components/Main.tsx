interface MainProps {
  isFetching: boolean;
  children: React.ReactNode;
}

export function Main({ isFetching, children }: MainProps) {
  return (
    <main
      className={`${
        isFetching && '!opacity-60'
      } flex w-full max-w-3xl flex-col gap-4 rounded-md border-2 bg-[rgba(255,255,255,0.8)]
        px-8 py-6 opacity-100 transition-opacity duration-500 ease-in-out`}
    >
      {children}
    </main>
  );
}
