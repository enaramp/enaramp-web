export default function Logo() {
  return (
    <a
      href={"/"}
      className="flex items-center justify-start shine"
    >
      <img src="/enaramp-full.png" alt="Logo" className="object-cover max-w-48 hidden md:block"/>
    </a>
  );
}