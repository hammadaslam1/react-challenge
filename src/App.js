import { useEffect, useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";
import Card from "./components/Card";
import Button from "./components/Button";
import { downloadFile, saveFile } from "./api/requests";

function App() {
  const [questions, setQuestions] = useState([]);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      answers: [],
    },
  });
  const onSubmit = (data) => {
    const newAnswers = data.answers.map((element, i) => {
      element.questionText = questions[i].questionText;
      return element;
    });

    saveFile(newAnswers, "answers.json");
    // downloadFile(newAnswers, "answers.json");
  };
  useEffect(() => {
    fetch("/assets/questions.json")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Failed to fetch questions");
        }
      })
      .then((data) => {
        setQuestions(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <main className="container mx-auto flex flex-col p-4 py-10 gap-8 text-black/80">
      <h2 className="text-3xl font-bold">Interview QA</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
        {questions.length > 0 &&
          questions?.map((question, index) => (
            <Card
              key={index}
              question={question}
              index={index}
              register={register}
            />
          ))}
        <Button>Save</Button>
      </form>
    </main>
  );
}

export default App;
