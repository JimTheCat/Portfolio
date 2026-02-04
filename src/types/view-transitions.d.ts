// View Transitions API type declarations
// This API is relatively new and may not be fully typed in TypeScript

interface ViewTransition {
  finished: Promise<void>;
  ready: Promise<void>;
  updateCallbackDone: Promise<void>;
  skipTransition(): void;
}

interface Document {
  startViewTransition?(callback: () => void | Promise<void>): ViewTransition;
}
