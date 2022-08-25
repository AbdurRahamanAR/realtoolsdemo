import { useCallback, useState } from "react";

export default function useToggle(initial: boolean) {
  const [open, setOpen] = useState<boolean>(initial);
  const toggle = useCallback(() => {
    setOpen((state) => !state);
  }, []);

  return { open, toggle };
}
