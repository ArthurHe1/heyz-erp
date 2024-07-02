import Header from "@/@layouts/vertical/Header";
import NavBar from "@/@layouts/vertical/NavBar";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      {/* Include shared UI here e.g. a header or sidebar */}
      <NavBar />
      <div className="flex-1">
        <Header />
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
