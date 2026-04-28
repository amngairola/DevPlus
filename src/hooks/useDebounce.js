import { useEffect, useState } from "react";

export function useDebounce(value, delay) {
  const [debounce, setDebounce] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => setDebounce(value), delay);

    return () => clearTimeout(id);
  }, [value, delay]);

  return debounce;
}

/* 
-------REF-DOCS-----------

{

1️⃣ Why useState(value) and not ""?
const [debounced, setDebounced] = useState(value);
What this means
The debounced state starts with the current value
No delay for the first render
If you used "" instead:
const [debounced, setDebounced] = useState("");
Problem:
On first render:
value = "aman" (example)
debounced = ""
Your API won’t run immediately
It waits for debounce delay → bad UX
Why current approach is correct

👉 It ensures:

First value is instantly available
Debounce only applies to future changes
Real-world example

If you open:

/search?user=aman

You WANT:

API to run immediately

NOT:

wait 500ms for no reason
}
*/
