export interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

export const DefaultLayout: React.FC<LayoutProps> = ({
  children,
  title,
}: LayoutProps) => {
  return (
    <div className="min-h-full">
      <div className="relative bg-gray-800 pb-32">
        <nav className="bg-gray-800">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="border-b border-white/10">
              <div className="flex h-16 items-center justify-between px-4 sm:px-0">
                <div className="flex items-center">
                  <div className="shrink-0">
                    <svg className="size-8" viewBox="0 0 150 138" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M58.9 2c36.6 0 66.3 27.3 66.3 61.2 0 29-26.6 49.5-64.6 49.5C23 112.7 0 92 0 58.2A52 52 0 0 1 18 17 60.9 60.9 0 0 1 58.9 2Zm-9.8 14c-10.3 0-17.3 9-17.3 22.1C31.8 65.6 53 96 71.8 96c11.5 0 19-8.2 19-20.7 0-26.4-23-59-41.7-59Z" className="fill-white" />
                      <path
                        d="M94.9 77.4a19.5 19.5 0 0 1 19 4.3 23 23 0 0 0 22.5 3.6l1.8-.6 4.7-1.7 1.3-.4c-2.3 13.8-14 24.3-35.2 31.4l-2.5.8-1 .3a19.5 19.5 0 1 1-10.6-37.6h0Z"
                        className="text-purple-500"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M57.6 89a19.5 19.5 0 0 0-13.3 14.4A23 23 0 0 1 28 119.2l-1.8.5-4.8 1.2-1.4.5c9.8 10 25.4 12 46.9 5.8l2.4-.8 1-.3a19.5 19.5 0 0 0-12.6-37h0Z"
                        className="text-purple-500"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      <a
                        href="/users"
                        aria-current="true"
                        className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                      >
                        Users
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <header className="py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-white">{title}</h1>
          </div>
        </header>
      </div>

      <main className="relative -mt-32">
        <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-white px-5 py-6 shadow-sm sm:px-6 overflow-x-auto">
            {children}
          </div>
        </div>
      </main>
      <footer className="py-4">
        <p className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Octave Engineering.
        </p>
      </footer>
    </div>
  );
};
