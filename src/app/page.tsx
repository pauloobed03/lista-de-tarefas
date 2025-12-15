"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Plus,
  List,
  Check,
  ArrowDownRight,
  Trash2,
  ListCheck,
  Sigma,
} from "lucide-react";
import EditarTarefa from "@/components/editar-tarefa";
import { getTarefas } from "@/actions/get-tarefas-from-bd";
import { useEffect, useState } from "react";
import { tarefas } from "@/generated/prisma";
import { NovaTarefa } from "@/actions/add-tarefas";
import { deleteTarefa } from "@/actions/delete-tarefa";
import { toast } from "sonner";
import { updateTarefaEstado } from "@/actions/toggle.estado";

const Home = () => {
  const [listaTarefas, setListaTarefas] = useState<tarefas[]>([]);
  const [tarefa, setTarefa] = useState<string>("");

  const handleGetTarefas = async () => {
    try {
      const tarefas = await getTarefas();

      if (!tarefas) return;

      setListaTarefas(tarefas);
    } catch (error) {
      throw error;
    }
  };

  const handleAddTarefa = async () => {
    try {
      if (tarefa.length == 0 || !tarefa) {
        return;
      }

      const minhaNovaTarefa = await NovaTarefa(tarefa);

      if (!minhaNovaTarefa) return;
      setTarefa("");
      await handleGetTarefas();
      toast.success("Tarefa Adicionada com sucesso");
    } catch (error) {
      throw error;
    }
  };

  const handleDeleteTarefa = async (id: string) => {
    try {
      if (!id) return;
      const deletedTarefa = await deleteTarefa(id);
      if (!deletedTarefa) return;
      await handleGetTarefas();
      toast.warning("Tarefa apagada com sucesso");
    } catch (error) {
      this;
    }
  };

  const handleToggleTarefa = async (tarefaId: string) => {
    const previousTarefa = [...listaTarefas];

   try{
       setListaTarefas((prev) => {
      const updateTarefaLista = prev.map((tarefa) => {
        if (tarefa.id === tarefaId) {
          return {
            ...tarefa,
            estado: !tarefa.estado,
          };
        } else {
          return tarefa;
        }
      });
      return updateTarefaLista;
    });

     await updateTarefaEstado(tarefaId)
   
   } catch(error){
    setListaTarefas(previousTarefa)
    throw error
   }
  };

  useEffect(() => {
    handleGetTarefas();
  }, []);

  return (
    <div className="w-full h-screen bg-gray-100 flex justify-center items-center ">
      <Card className="w-lg p-4">
        <CardHeader className="flex gap-2">
          <Input
            placeholder="Adicionar Tarefa"
            onChange={(e) => setTarefa(e.target.value)}
            value={tarefa}
          />
          <Button
            variant="outline"
            className="cursor-pointer"
            onClick={handleAddTarefa}
          >
            <Plus />
            Cadastrar
          </Button>
        </CardHeader>
        <CardContent>
          <Separator className="mb-4" />
          <div className="flex gap-2">
            <Badge className="cursor-pointer" variant="default">
              <List />
              Todas
            </Badge>
            <Badge className="cursor-pointer" variant="outline">
              <ArrowDownRight />
              Não Finalizadas
            </Badge>
            <Badge className="cursor-pointer" variant="outline">
              <Check />
              Concluídas
            </Badge>
          </div>
          <div className="mt-4 border-b-1">
            {listaTarefas.map((tarefas) => (
              <div
                className="h-14 flex justify-between items-center  border-t-1"
                key={tarefas.id}
              >
                <div
                  className={`${
                    tarefas.estado
                      ? "w-1 h-full bg-green-500"
                      : "w-1 h-full bg-red-500"
                  }`}
                ></div>
                <p
                  className="flex-1 px-2 text-sm cursor-pointer hover:text-gray-700"
                  onClick={() => handleToggleTarefa(tarefas.id)}
                >
                  {tarefas.tarefa}
                </p>
                <div className="flex gap-2 items-center">
                  <EditarTarefa />
                  <Trash2
                    size={16}
                    className="cursor-pointer"
                    onClick={() => handleDeleteTarefa(tarefas.id)}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-4">
            <div className="flex gap-2 items-center">
              <ListCheck size={18} />
              <p className="text-xs">Tarefas Concluídas (3/3)</p>
            </div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  className="text-xs h-7 cursor-pointer"
                  variant="outline"
                >
                  <Trash2 />
                  Limpar tarefas concluídas
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Tem Certeza que deseja excluir x itens?
                  </AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Continuar</AlertDialogCancel>
                  <AlertDialogAction>Cancelar</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>

          <div className="h-2 w-full bg-gray-100 mt-4 rounded-md">
            <div
              className="h-full  bg-blue-500 rounded-md"
              style={{ width: "50%" }}
            ></div>
          </div>

          <div className="flex justify-end items-center mt-2 gap-2">
            <Sigma size={18} />
            <p className="text-xs">Tarefas no total </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
