export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {children}
      <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-yellow-dark text-tag font-bold text-white md:h-5 md:w-5 md:text-xs">
        3
      </span>
    </div>
  );
}
