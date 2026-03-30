export default function Footer() {
  return (
    <footer className="bg-[#111827] py-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-white/30 text-sm">© {new Date().getFullYear()} Dr. Priyanka Rathee — NIT Hamirpur</p>
        <p className="text-white/20 text-sm">Department of Computer Science & Engineering</p>
      </div>
    </footer>
  );
}
