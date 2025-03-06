"use client";

import { useState, useTransition } from "react";
import { connectToDb } from "./call-database";

export const TryToConnect = () => {
  const [isPending, startTransition] = useTransition();
  const [name, setName] = useState("");
  const [error, setError] = useState(null);

  const submitAction = async () => {
    startTransition(async () => {
      await connectToDb();
      if (error) {
        setError(error);
      } else {
        setName("");
      }
    });
  };

  return (
    <form action={submitAction}>
      <input type="text" name="name" disabled={isPending} />
      <button type="submit">Send</button>
      {error && <span>Failed: {error}</span>}
    </form>
  );
};
