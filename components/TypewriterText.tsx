"use client";

import { useEffect, useState } from "react";

interface Props {
  sequences: {
    text: string;
    color?: string;
    pause?: number;
  }[];
  className?: string;
  speed?: number;
  deleteSpeed?: number;
}

export default function TypewriterText({
  sequences,
  className = "",
  speed = 50,
  deleteSpeed = 30,
}: Props) {
  const [displayText, setDisplayText] = useState("");
  const [currentSeq, setCurrentSeq] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentColor, setCurrentColor] = useState(sequences[0]?.color || "inherit");

  useEffect(() => {
    const seq = sequences[currentSeq];
    if (!seq) return;

    setCurrentColor(seq.color || "inherit");

    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      // Typing
      if (displayText.length < seq.text.length) {
        timeout = setTimeout(() => {
          setDisplayText(seq.text.slice(0, displayText.length + 1));
        }, speed);
      } else {
        // Finished typing — pause then delete
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, seq.pause ?? 1500);
      }
    } else {
      // Deleting
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, deleteSpeed);
      } else {
        // Finished deleting — move to next sequence
        setIsDeleting(false);
        setCurrentSeq((prev) => (prev + 1) % sequences.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentSeq, sequences, speed, deleteSpeed]);

  return (
    <span className={className} style={{ color: currentColor }}>
      {displayText}
      {/* Blinking cursor */}
      <span
        className="inline-block w-0.5 h-[1em] ml-1 align-middle animate-pulse"
        style={{ background: currentColor }}
      />
    </span>
  );
}