
import { Button } from "../ui/moving-border";

export function MovingBorderDemo() {
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-[#00A1B7] text-black border-[8px] dark:text-[#D5EFF3] border-neutral-200 dark:border-[#00A1B7]"
      >
        Borders are cool
      </Button>
    </div>
  );
}
