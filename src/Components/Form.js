import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit, formState: { errors }} = useForm();

  const onSubmit = (data) => {
    console.dir(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>User Id:</label><br/>
      <input
        {...register("userId", {
          required: true,
          maxLength: 2
        })}
      /><br/>
      {errors?.userId?.type === "required" && <p>This field is required</p>}
      {errors?.userId?.type === "maxLength" && (
        <p>userId cannot exceed 2 characters</p>
      )}
      <label>Id:</label><br/>
      <input
        {...register("id", {
          required: true,
          maxLength: 3
        })}
      /><br/>
      {errors?.id?.type === "required" && <p>This field is required</p>}
      {errors?.id?.type === "maxLength" && (
        <p>id cannot exceed 3 characters</p>
      )}
      <label>Title</label><br/>
      <input
        type="text"
        {...register("title", {
          required: true,
          pattern: /^[a-zA-z]/i,
        })}
      /><br/>
      {errors?.title?.type === "required" && <p>This field is required</p>}
      {errors?.title?.type === "pattern" && (
        <p>Alphabetical characters only</p>
      )}
      <label>Body</label><br/>
      <input
        type="text"
        {...register("body", {
          required: true
        })}
      /><br/>
      {errors?.body?.type === "required" && <p>This field is required</p>}<br/>
      <input type="submit" />
    </form>
  );
};

export default Form;
