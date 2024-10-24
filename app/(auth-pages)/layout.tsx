export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-full flex flex-col gap-20 items-center mt-10 mb-10">
      {children}
    </div>
  );
}
