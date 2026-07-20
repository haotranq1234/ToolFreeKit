import type { ComponentType } from "react";
import { PercentageCalculatorTool } from "@/tools/percentage-calculator/PercentageCalculatorTool";
import { UnitConverterTool } from "@/tools/unit-converter/UnitConverterTool";
import { WordCounterTool } from "@/tools/word-counter/WordCounterTool";

export const toolComponents: Record<string, ComponentType> = {
  "word-counter": WordCounterTool,
  "percentage-calculator": PercentageCalculatorTool,
  "unit-converter": UnitConverterTool
};
