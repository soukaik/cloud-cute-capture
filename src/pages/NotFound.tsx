
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      <h1 className="text-4xl font-bold mb-4">Página Não Encontrada</h1>
      <p className="text-muted-foreground mb-8">
        Desculpe, a página que você está procurando não existe.
      </p>
      <Button asChild>
        <Link to="/">Voltar para Página Inicial</Link>
      </Button>
    </div>
  );
}
