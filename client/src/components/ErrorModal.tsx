import { useState } from "react";

type ErrorProps = {
  message: string;
};

/**
 * This component is used to display an error message to the user.
 * @param message - the error message to display
 * @returns dialog modal with the error message
 */
export default function ErrorModal({ message }: ErrorProps) {
  const [isOpen, setIsOpen] = useState(true);

  function onClose() {
    setIsOpen(false);
  }

  return isOpen ? (
    <dialog>
      <h2>Error</h2>
      <p>{message}</p>
      <button onClick={onClose}>Close</button>
    </dialog>
  ) : undefined;
}
