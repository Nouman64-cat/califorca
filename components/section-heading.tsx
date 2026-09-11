export function SectionHeading({
  eyebrow,
  title,
  description,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={`mb-10 ${center ? "text-center" : ""}`}>
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-red">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-extrabold text-brand-black sm:text-3xl">{title}</h2>
      {description && (
        <p className={`mt-3 text-neutral-600 ${center ? "mx-auto max-w-2xl" : "max-w-2xl"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
