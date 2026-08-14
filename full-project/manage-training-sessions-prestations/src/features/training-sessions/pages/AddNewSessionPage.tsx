import { Suspense } from "react";
import { AddNewSession } from "../components/AddNewSession";

export const AddNewSessionPage = () => {
  return (
    <>
      <Suspense fallback={<p>Chargement des formations</p>}>
        <AddNewSession />
      </Suspense>
    </>
  );
};
