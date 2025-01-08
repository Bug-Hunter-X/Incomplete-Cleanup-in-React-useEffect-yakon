# Incomplete Cleanup in React useEffect

This repository demonstrates a common bug in React's `useEffect` hook where the cleanup function doesn't always execute properly due to an incorrect conditional statement.  The bug involves a condition within the cleanup function that prevents it from executing under specific circumstances, leading to potential memory leaks or unexpected behavior.

The `bug.js` file shows the buggy component, while `bugSolution.js` provides the corrected version with a robust cleanup function.