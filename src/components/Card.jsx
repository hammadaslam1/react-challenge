import Textarea from "./Textarea";

const Card = ({ index, question, register }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md flex flex-col gap-4">
      <h3 className="text-2xl font-bold">Question {index + 1}.</h3>
      <div className="text-xl font-semibold">{question.questionText}</div>
      <Textarea
        register={register}
        required={!question.optional}
        name={`answers.${index}.answer`}
      />
    </div>
  );
};

export default Card;
