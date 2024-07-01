import LoginForm from "./_components/LoginForm";

export default function Login() {
  return (
    <div className="p-4 h-screen bg-gradient-to-br from-cyan-100 to-sky-500">
      <div>Logo</div>
      <div className="py-4 px-8 rounded w-[400px] mx-auto mt-[25vh] shadow-xl bg-white">
        <div className="text-center text-xl my-4">Welcome to Foundation!👋🏻</div>
        <LoginForm />
      </div>
    </div>
  );
}
