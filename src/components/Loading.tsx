export const Loading = () => {
  return (
    <div className="flex items-start justify-center h-full w-full">
      <div
        className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent text-[#639605] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  );
};
