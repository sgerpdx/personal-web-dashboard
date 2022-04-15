import React, { useState, useEffect } from "react";
import Gauge from "react-gaugejs";

export default function GaugeTimer() {
  const [value, setValue] = useState<number>(0);

  const handleResultTextChange = () => {
    //
  };

  const setNewValue = () => {
    const prevValue = value;
    setValue(prevValue + 5);
  };

  useEffect(() => {
    const updateValue = setInterval(setNewValue, 1000);
    return function cleanup() {
      clearInterval(updateValue);
    };
  }, []);

  return (
    <div>
      <h4>Value: {value}</h4>
      <div>
        {/* <canvas>
          <Gauge
            value={750}
            minValue={0}
            maxValue={1000}
            animationSpeed={32}
            options={{
              angle: -50.0,
              lineWidth: 0.1,
              radiusScale: 1,
              pointer: {
                length: 0.6,
                strokeWidth: 0.035,
                color: "#000000",
              },
              limitMax: false,
              limitMin: false,
              colorStart: "#6F6EA0",
              colorStop: "#C0C0DB",
              strokeColor: "#EEEEEE",
              generateGradient: true,
              highDpiSupport: true,
            }}
            textChangeHandler={handleResultTextChange}
            donut
          />{" "}
        </canvas> */}
      </div>
    </div>
  );
}
