import { ErrorMessage } from "@hookform/error-message";
import { use, useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { AddLayout } from "../../../shared/uis/layouts/components/AddLayout";
import type { CreateTrainingSession } from "../models/training-session";
import { addOneTrainingCourse } from "../services/add-one-training-session";
import { getListTrainingCourses } from "../services/get-list-training-courses";
import { useAppDispatch, useAppSelector } from "@/chore/store/hooks";
import { selectCount } from "../store/sessions.selectors";
import { addOne } from "../store";

const trainingCoursesPromise = getListTrainingCourses();

export const AddNewSession = () => {
    "use no memo";

  const dispatch = useAppDispatch()
  const nbItems = useAppSelector(selectCount)

  const {
    register,
    handleSubmit,
    formState: { isValid, errors, isSubmitSuccessful },
    reset,
  } = useForm<CreateTrainingSession>({ mode: "onChange",
    defaultValues: {
    trainingCourseId: 0,
    type: "presta",
  }
   });
  const onSubmit: SubmitHandler<CreateTrainingSession> = async (data) => {
    await addOneTrainingCourse(data);
    dispatch(addOne(data));
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const trainingCourses = use(trainingCoursesPromise);

  return (
    <>
      <AddLayout>
        <h1>Nouvelle session (sessions existantes : {nbItems})</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Training course</label>
          <select
            {...register("trainingCourseId", { required: "Id requis", min: 1 })}
          >
            <option value="0">[Selectionner]</option>
            {trainingCourses.map((item) => (
              <option key={item.id} value={item.id}>
                {item.title}
              </option>
            ))}
          </select>
          <ErrorMessage errors={errors} name="trainingCourseId" />

          <label>Type</label>
          <select {...register("type", { required: true })}>
            <option value="presta">Prestation</option>
            <option value="final">Client final</option>
          </select>
          <ErrorMessage errors={errors} name="type" />

          <label>Date début</label>
          <input {...register("beginDate")} type="datetime-local"></input>
          <ErrorMessage errors={errors} name="beginDate" />

          <label>Date fin</label>
          <input {...register("endDate")} type="datetime-local"></input>
          <ErrorMessage errors={errors} name="endDate" />

          <button disabled={!isValid} type="submit">
            Ajouter
          </button>
        </form>
      </AddLayout>
    </>
  );
};
