import { Megaphone } from 'lucide-react';

type AdSlotProps = {
  className?: string;
};

export function AdSlot({ className }: AdSlotProps) {
  return (
    <div
      className={`flex h-64 w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border bg-muted/50 text-muted-foreground ${className}`}
    >
      <Megaphone className="h-8 w-8" />
      <p className="mt-2 text-sm font-semibold">Advertisement</p>
    </div>
  );
}
