
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `
The Scass Sustainable Materials Agency (SSMA) is a visionary organization dedicated to revolutionizing the materials industry through innovation, sustainability, and environmental stewardship. With a focus on harnessing the potential of natural resources, SSMA leads the way in developing cutting-edge solutions that promote ecological balance, enhance product durability, and elevate aesthetic appeal.
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
