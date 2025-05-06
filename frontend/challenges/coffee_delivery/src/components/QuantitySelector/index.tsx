export function QuantitySelector() {
  return (
    <div className="flex items-center rounded-md bg-base-button px-2 py-1">
      <button className="flex h-5 w-5 flex-1 items-center justify-center text-brand-purple hover:text-brand-purple-dark">
        -
      </button>
      <span className="w-5 text-center text-base-text">1</span>
      <button className="flex h-5 w-5 flex-1 items-center justify-center text-brand-purple hover:text-brand-purple-dark">
        +
      </button>
    </div>
  );
}
