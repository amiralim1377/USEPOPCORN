import { useForm } from "react-hook-form";
import "./InputElem.css";
import { useNavigate } from "react-router-dom";
import { getfilms } from "../../services/getfilms";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

function InputElem() {
  const [querykey, setQuerykey] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors: inputErrors },
    reset,
  } = useForm();
  //   const navigate = useNavigate();

  const { isLoading, data, error } = useQuery({
    queryKey: ["querykey"],
    queryFn: () => getfilms(querykey),
  });

  const onSubmit = (data) => {
    setQuerykey(data.film);
    // navigate(`/search/${data.film}`);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("film", {
            required: "search any film you wish to watch!!",
          })}
          className="inputElem"
          type="text"
          placeholder="search your favorit movie..."
          autoFocus
        />
        {inputErrors?.film && (
          <p className="ErrorElem">{inputErrors.film.message}</p>
        )}
      </form>
    </div>
  );
}

export default InputElem;
