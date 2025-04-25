
import React from 'react';
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Package, Search } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface RastreamentoFormData {
  codigoPedido: string;
}

const Rastreamento = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<RastreamentoFormData>();
  const { toast } = useToast();

  const onSubmit = (data: RastreamentoFormData) => {
    // Aqui você pode implementar a lógica de rastreamento
    toast({
      title: "Pedido encontrado!",
      description: `Rastreando pedido: ${data.codigoPedido}`,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center mb-4">
              <Package className="h-10 w-10 text-kumo-pink" />
            </div>
            <h1 className="text-2xl font-bold text-center mb-2">Rastreie seu Pedido</h1>
            <p className="text-muted-foreground text-center">
              Digite o código de rastreamento que você recebeu no email de confirmação
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <Input
                  {...register("codigoPedido", { required: "Código do pedido é obrigatório" })}
                  placeholder="Digite o código do pedido"
                  className="w-full"
                />
                {errors.codigoPedido && (
                  <p className="text-sm text-destructive mt-1">{errors.codigoPedido.message}</p>
                )}
              </div>
              <Button type="submit" className="w-full gap-2">
                <Search className="h-4 w-4" />
                Rastrear Pedido
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Rastreamento;
