import "@/stylesheets/background.css";

export default function AnimatedBackground() {
  return (
    <div className="animated-background">
      {[...Array(8)].map((_, i) => (
        <span key={i} />
      ))}
    </div>
  );
}
