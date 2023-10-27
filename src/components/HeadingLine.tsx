// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
export function HeadingLine({ title, id, marginTop }: { title: string; id: string }) {
  return (
    <div id={id} className={`${marginTop} w-full p-5`}>
      <span className="relative before:absolute text-center block before:block before:top-1/2 before:border-2 before:border-[#ccc] before:w-full before:content-['']">
        <h1 className="relative inline-block text-xl bg-white dark:bg-primary p-2 capitalize">
          {title}
        </h1>
      </span>
    </div>
  );
}
