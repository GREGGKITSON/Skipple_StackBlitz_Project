"use client";

// Import the registration file for its side-effects.
// It doesn't export a component (and that's fine).
import "../builder.register";

export default function InitBuilder() {
  // Nothing to render; just ensure registrations run on the client
  return null;
}
