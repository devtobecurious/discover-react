import { useState, useTransition } from "react";

function updateName(name: string): Promise<string> {
    return new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve(name)
        }, 1500);
    });
}

export const UpdateName = () => {
    const [name, setName] = useState('');
    const [error, setError] = useState<unknown | null>(null);
    const [isPending, startTransition] = useTransition()

    const handleSubmit = () => {
        startTransition(async () => {
            try {
                const result = await updateName(name);
                setName('OK ');    
            } catch (error) {
                setError(error);
            }
            
        })
    }

    return (
        <div>
            <span>name  {name}</span>
          <input value={name} onChange={(event) => setName(event.target.value)} />
          <button onClick={handleSubmit} disabled={isPending}>
            Update
          </button>
          {error && <p>{error}</p>}
        </div>
      );
}