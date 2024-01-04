export function RatEars(props: { className?: string; color: string }) {
  return (
    <div
      className={`flex w-4/5 max-w-sm relative top-5 justify-between ${props.className}`}
    >
      <div className="bg-gray rounded-tl-full rounded-tr-full rounded-bl-full h-24 w-24 inline-flex justify-center items-center">
        <div
          style={{
            backgroundColor: props.color,
          }}
          className="h-12 w-12 rounded-tl-full rounded-tr-full rounded-bl-full mt-3 ml-1"
        ></div>
      </div>

      <div className="bg-gray rounded-tl-full rounded-tr-full rounded-br-full h-24 w-24 inline-flex justify-center items-center">
        <div
          style={{
            backgroundColor: props.color,
          }}
          className="h-12 w-12 rounded-tl-full rounded-tr-full rounded-br-full mt-3 mr-1"
        ></div>
      </div>
    </div>
  );
}
