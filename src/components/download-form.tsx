"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";

const formSchema = z.object({
  name: z.string().min(1, "O nome é obrigatório"),
  email: z.string().email("Digite um email válido"),
  company: z.string().optional(),
});

export default function DownloadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", company: "" },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const pdfUrl = "/guia_modelo_c.pdf";
    const newTab = window.open(pdfUrl, "_blank");

    if (!newTab) {
      window.location.href = pdfUrl;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        console.log("Sucesso:", result.message);
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full md:w-[490px] bg-white p-6 rounded-lg shadow-md">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="name">Nome Completo</Label>
                <FormControl>
                  <Input id="name" placeholder="Seu nome completo" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="email">Email</Label>
                <FormControl>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Seu email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="company">Organização (Opcional)</Label>
                <FormControl>
                  <Input
                    id="company"
                    placeholder="Nome da Organização"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Botão de Envio */}
          <Button
            type="submit"
            className="w-full bg-custom-purple"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Aguarde..." : "Continuar"}
          </Button>
        </form>

        <div className="mt-6">
          <p className="text-[12px]">*Seus dados serão utilizados apenas para monitoramento da publicação. Ao preencher este formulário, você também autoriza o recebimento de novidades exclusivamente relacionadas ao Modelo C.</p>
        </div>
      </Form>
    </div>
  );
}
