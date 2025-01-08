```javascript
// Corrected component
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct cleanup function - always executes
    return () => {
      console.log('Cleaning up...');
    };
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```