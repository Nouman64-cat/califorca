export function PageHero({ title, description }: { title: string; description?: string }) {
  return (
    <section className="bg-brand-black py-14">
      <div className="container-page">
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl">{title}</h1>
        {description && <p className="mt-3 max-w-2xl text-white/70">{description}</p>}
      </div>
    </section>
  );
}
