interface QuantitySelectorProps {
  value: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export function QuantitySelector({
  value = 0,
  onIncrease,
  onDecrease,
}: QuantitySelectorProps) {
  return (
    <div className="flex items-center rounded-md bg-base-button px-2 py-1 dark:border dark:border-base-hover">
      <button
        type="button"
        className="flex h-5 w-5 flex-1 items-center justify-center text-brand-purple hover:text-brand-purple-dark dark:hover:text-brand-purple-light"
        onClick={onDecrease}
      >
        -
      </button>
      <span className="w-5 text-center text-base-text dark:text-base-subtitle">{value}</span>
      <button
        type="button"
        className="flex h-5 w-5 flex-1 items-center justify-center text-brand-purple hover:text-brand-purple-dark dark:hover:text-brand-purple-light"
        onClick={onIncrease}
      >
        +
      </button>
    </div>
  );
}
