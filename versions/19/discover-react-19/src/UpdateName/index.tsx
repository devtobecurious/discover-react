import { useState, useTransition } from "react";
import { useNavigate } from "react-router";
import { updateName } from "./services/updateName";

export const UpdateName = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const navigate = useNavigate();

  const handleSubmit = () => {
    startTransition(async () => {
        const error = await updateName(name)
        if(error) {
            setError(error)
            return
        }

        navigate('/home')
    })
  }

  return (
    <>
        {isPending && <i>Saving ...</i>}
        {error && <i>{error}</i>}

      <label>Name</label>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      ></input>
      <button onClick={handleSubmit} disabled={isPending}>Save</button>
    </>
  );
};
