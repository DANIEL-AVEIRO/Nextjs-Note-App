const Home = () => {
  return (
    <main className="relative mx-auto flex min-h-full w-full max-w-lg flex-1 flex-col justify-center px-5 py-12 sm:px-8">
      <header className="animate-rise mb-10">
        <p className="mb-2 text-sm tracking-[0.18em] text-ink-muted uppercase">
          Notebook
        </p>
        <h1 className="font-display text-5xl leading-none font-semibold tracking-tight text-ink sm:text-6xl">
          My Notes
        </h1>
        <p className="mt-3 max-w-sm text-base text-ink-muted">
          Capture a thought, keep it close.
        </p>
      </header>

      <div className="animate-rise-delay flex gap-2">
        <label className="sr-only" htmlFor="note">
          Write a note
        </label>
        <input
          id="note"
          placeholder="Write a note..."
          className="note-input flex-1 rounded-xl border border-line bg-surface-raised/85 px-4 py-3 text-ink shadow-(--shadow) outline-none backdrop-blur-sm transition-[border-color,background-color] placeholder:text-ink-muted/70 focus:border-accent focus:bg-surface-raised"
        />
        <button
          type="button"
          className="rounded-xl bg-accent px-5 py-3 font-medium text-surface-raised transition-[background-color,transform] hover:bg-accent-deep active:scale-[0.98]"
        >
          Add
        </button>
      </div>

      <ul className="animate-rise-delay-2 mt-8 space-y-3">
        <li className="group rounded-xl border border-line/80 bg-surface-raised/80 px-4 py-3.5 shadow-(--shadow) backdrop-blur-sm transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-surface-raised">
          <div className="flex items-start justify-between gap-3">
            <p className="text-[15px] leading-relaxed text-ink">Note 1</p>
          </div>
        </li>
        <li className="group rounded-xl border border-line/80 bg-surface-raised/80 px-4 py-3.5 shadow-(--shadow) backdrop-blur-sm transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-surface-raised">
          <div className="flex items-start justify-between gap-3">
            <p className="text-[15px] leading-relaxed text-ink">Note 1</p>
          </div>
        </li>
        <li className="group rounded-xl border border-line/80 bg-surface-raised/80 px-4 py-3.5 shadow-(--shadow) backdrop-blur-sm transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-surface-raised">
          <div className="flex items-start justify-between gap-3">
            <p className="text-[15px] leading-relaxed text-ink">Note 1</p>
          </div>
        </li>
        <li className="group rounded-xl border border-line/80 bg-surface-raised/80 px-4 py-3.5 shadow-(--shadow) backdrop-blur-sm transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-surface-raised">
          <div className="flex items-start justify-between gap-3">
            <p className="text-[15px] leading-relaxed text-ink">Note 1</p>
          </div>
        </li>
        <li className="rounded-xl border border-dashed border-line px-4 py-6 text-center text-sm text-ink-muted">
          Your next note starts above.
        </li>
      </ul>
    </main>
  );
};

export default Home;
