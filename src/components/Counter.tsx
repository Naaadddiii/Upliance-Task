import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const Counter = () => {
  const [count, setCount] = useState(0);

  // Define animation properties using useSpring
  const { height, bgColor } = useSpring({
    // Height of the animated bar is proportional to the count value
    // It increases by 10 units per count, capped at 100%
    height: Math.min(count * 10, 100),

    // Background color changes dynamically based on count
    // It transitions from white (rgb(255, 255, 255)) to blue (rgb(0, 0, 255))
    bgColor: `rgb(${255 - Math.min(count * 25, 255)}, ${
      255 - Math.min(count * 25, 255)
    }, 255)`,

    // Animation configuration to control the smoothness of the transition
    config: { tension: 200, friction: 20 },
  });

  return (
    <div className="flex flex-col h-full justify-center">
      <div className="relative w-full flex-grow border rounded-lg overflow-hidden bg-white">
        <animated.div
          className="absolute left-0 bottom-0 w-full"
          style={{
            height: height.to((h) => `${h}%`),
            backgroundColor: bgColor,
          }}
        />
        <div className="relative z-10 h-full flex flex-col items-center justify-center space-y-4 p-4">
          <span className="text-4xl font-bold text-black">{count}</span>
          <div className="flex space-x-4">
            <button
              onClick={() => setCount((prev) => Math.max(0, prev - 1))}
              className="px-4 py-2 border rounded-md hover:bg-gray-100 bg-white text-black"
            >
              -
            </button>
            <button
              onClick={() => setCount(0)}
              className="px-4 py-2 border rounded-md hover:bg-gray-100 bg-white text-black"
            >
              Reset
            </button>
            <button
              onClick={() => setCount((prev) => prev + 1)}
              className="px-4 py-2 border rounded-md hover:bg-gray-100 bg-white text-black"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
