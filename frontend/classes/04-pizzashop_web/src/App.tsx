import { Button } from "./components/ui/button";
import "./global.css";

export function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">Pizza Shop</h1>
      <p className="text-xl text-gray-600">Welcome to our pizza shop!</p>
      <Button>Enviar</Button>
    </div>
  );
}
