import { useCallback, useState } from "react";

export const WithState = () => {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    setCount((currentCount) => currentCount + 1);
  }, []);

  return (
    <div>
      <button onClick={handleClick}>click me</button>
      <div>clickCount: {count}</div>
    </div>
  );
};

export default WithState;
