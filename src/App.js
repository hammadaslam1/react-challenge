import "./App.css";
import questions from "./assets/questions.json";
import { useForm } from "react-hook-form";
function App() {
  const {
    register,
    handleSubmit,
  } = useForm({
    defaultValues: {
      answers: [],
    },
  });
  const onSubmit = (data) => {
    console.log("Form submitted:", data.answers);
  };
  return (
    <main className="container mx-auto flex flex-col p-4 py-10 gap-8 text-black/80">
      <h2 className="text-3xl font-bold">Interview QA</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
        {questions.map((question, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 rounded-md shadow-md flex flex-col gap-4"
          >
            <h3 className="text-2xl font-bold">Question {index + 1}.</h3>
            <div className="text-xl font-semibold">{question.questionText}</div>
            <textarea
              name="answer"
              id={`answer-${index}`}
              className="outline-none p-4 resize-none"
              rows={3}
              {...register(`answers.${index}.answer`, {
                required: !question.optional,
              })}
            ></textarea>
          </div>
        ))}
        <button
          type="submit"
          className="bg-gray-800 hover:bg-gray-900 active:bg-gray-900/90 text-white text-xl transition-all font-semibold p-3 px-6 w-fit rounded-md"
        >
          Save
        </button>
      </form>
    </main>
  );
}

export default App;
