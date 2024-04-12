
import { Button } from "../ui/moving-border";

export function MovingBorderDemo() {
  return (
    <div className="mt-5">
      <Button
        borderRadius="1.75rem"
        className=" bg-[#e2e0db] font-bold border-[8px] text-[#585755]  border-[#e2e0db]"
      >
        Borders are cool
      </Button>
    </div>
  );
}
