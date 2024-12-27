import { useState, useEffect } from "react";

const RandomPicker: React.FC = () => {
  const values: string[] = ["Value 1", "Value 2", "Value 3", "Value 4", "Value 5"];
  const [pickedValue, setPickedValue] = useState<string | null>(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * values.length);
    setPickedValue(values[randomIndex]);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Random Array Picker</h1>
      {pickedValue && (
        <div className="text-xl font-medium text-gray-800">
          Picked Value: <span className="text-blue-600">{pickedValue}</span>
        </div>
      )}
    </div>
  );
};

export default RandomPicker;