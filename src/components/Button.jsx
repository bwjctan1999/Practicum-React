export default function Button({ text, bgcolor, onClick }) {
  const style = `w-full rounded-lg shadow text-white p-4 font-bold ${bgcolor}`;

  return (
    <button className={style} onClick={onClick}>
      {text}
    </button>
  );
}
