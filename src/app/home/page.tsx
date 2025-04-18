export default function HomePage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <h1 className="text-center text-2xl font-bold">
          Welcome to ScacchiOnline
        </h1>
        <p className="text-center text-sm text-muted-foreground">
          Your online chess platform
        </p>
      </div>
    </div>
  );
}
