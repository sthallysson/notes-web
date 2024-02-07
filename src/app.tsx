import logo from './assets/nlw-logo.svg';
import NewNoteCard from './components/new-note-card';
import { NoteCard } from './components/note-card';

const note = {
  date: new Date(),
  content:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde ut sed mollitia veritatis, atque nihil rem doloremque illum nesciunt eum, repellendus delectus sequi sunt perspiciatis voluptates amet quam, necessitatibus vel.',
};

export function App() {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="NLW" />
      <form className="w-full">
        <input
          type="text"
          placeholder="Busque em suas notas"
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500"
        />
      </form>

      <div className="h-px bg-slate-700" />

      <section className="grid grid-cols-3 gap-6 auto-rows-[250px]">
        <NewNoteCard />

        <NoteCard note={note} />
      </section>
    </div>
  );
}
