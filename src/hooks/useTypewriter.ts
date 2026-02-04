import { useState, useEffect, useCallback } from 'react';

interface UseTypewriterOptions {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  delayBetweenWords?: number;
  loop?: boolean;
}

export const useTypewriter = ({
  words,
  typeSpeed = 100,
  deleteSpeed = 50,
  delayBetweenWords = 2000,
  loop = true,
}: UseTypewriterOptions) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  const currentWord = words[wordIndex] || '';

  const type = useCallback(() => {
    if (isWaiting) return;

    if (!isDeleting) {
      // Typing
      if (text.length < currentWord.length) {
        setText(currentWord.slice(0, text.length + 1));
      } else {
        // Finished typing, wait before deleting
        setIsWaiting(true);
        setTimeout(() => {
          setIsWaiting(false);
          setIsDeleting(true);
        }, delayBetweenWords);
      }
    } else {
      // Deleting
      if (text.length > 0) {
        setText(text.slice(0, -1));
      } else {
        // Finished deleting, move to next word
        setIsDeleting(false);
        if (loop || wordIndex < words.length - 1) {
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }
  }, [text, currentWord, isDeleting, isWaiting, wordIndex, words.length, loop, delayBetweenWords]);

  useEffect(() => {
    const speed = isDeleting ? deleteSpeed : typeSpeed;
    const timer = setTimeout(type, speed);
    return () => clearTimeout(timer);
  }, [type, isDeleting, typeSpeed, deleteSpeed]);

  // Reset when words change (e.g., language switch)
  useEffect(() => {
    setText('');
    setWordIndex(0);
    setIsDeleting(false);
    setIsWaiting(false);
  }, [words.join(',')]);

  return { text, isTyping: !isDeleting && text.length < currentWord.length };
};
