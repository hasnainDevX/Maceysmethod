export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-6xl font-serif font-bold text-foreground mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-6">Page not found</p>
        <a
          href="/"
          className="btn-primary px-6 py-3 rounded-lg font-semibold inline-block"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}