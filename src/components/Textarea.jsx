const Textarea = ({ register, required, name }) => {
  return (
    <textarea
      name="answer"
      className="outline-none p-4 resize-none"
      rows={3}
      {...register(name, {
        required,
      })}
    ></textarea>
  );
};

export default Textarea;
