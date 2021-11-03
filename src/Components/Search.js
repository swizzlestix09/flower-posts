import React from "react";
import { useForm } from "react-hook-form";

const Search = () => {
  const { register, handleSubmit, formState: { errors }} = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Search by title:</label><br/>
      <input
        {...register("search", {
          required: true,
          pattern: /[a-zA-z]/,
        })}
      /><br/>
      {errors?.search?.type === "required" && <p>This field is required</p>}
      {errors?.search?.type === "pattern" && (
        <p>Alphabetical characters only</p>
      )}
      <input type="submit" />
    </form>
  );
};

export default Search;