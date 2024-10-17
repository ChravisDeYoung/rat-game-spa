export function RatBody(props: { className?: string; words: string[] }) {
  return (
    <div className={`w-2/3 max-w-xs ${props.className}`}>
      {props.words.map((word, index) => (
        <p
          key={index}
          className="bg-gray py-2 my-[0.1rem] text-medium first:rounded-t-2xl w-full"
        >
          {word}
        </p>
      ))}
    </div>
  );
}
