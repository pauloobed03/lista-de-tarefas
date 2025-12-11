import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Plus,
  List,
  Check,
  ArrowDownRight,
  SquarePen,
  Trash2,
  ListCheck,
  Sigma,
} from "lucide-react";

const Home = () => {
  return (
    <div className="w-full h-screen bg-gray-100 flex justify-center items-center ">
      <Card className="w-lg p-4">
        <CardHeader className="flex gap-2">
          <Input placeholder="Adicionar Tarefa" />
          <Button variant="outline" className="cursor-pointer">
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
            <div className="h-14 flex justify-between items-center  border-t-1">
              <div className="w-1 h-full bg-yellow-500 "></div>
              <p className="flex-1 px-2 text-sm">Estudar React</p>
              <div className="flex gap-2 items-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <SquarePen size={16} className="cursor-pointer" />
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Editar Tarefa</DialogTitle>
                    </DialogHeader>

                    <div className="flex gap-2">
                      <Input placeholder="Editar Tarefa" />
                      <Button className="cursor-pointer">Editar</Button>
                    </div>
                  </DialogContent>
                </Dialog>
                <Trash2 size={16} className="cursor-pointer" />
              </div>
            </div>

            <div className="h-14 flex justify-between items-center  border-t-1">
              <div className="w-1 h-full bg-yellow-500 "></div>
              <p className="flex-1 px-2 text-sm">Estudar React</p>
              <div className="flex gap-2 items-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <SquarePen size={16} className="cursor-pointer" />
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Editar Tarefa</DialogTitle>
                    </DialogHeader>

                    <div className="flex gap-2">
                      <Input placeholder="Editar Tarefa" />
                      <Button className="cursor-pointer">Editar</Button>
                    </div>
                  </DialogContent>
                </Dialog>
                <Trash2 size={16} className="cursor-pointer" />
              </div>
            </div>

            <div className="h-14 flex justify-between items-center  border-t-1">
              <div className="w-1 h-full bg-yellow-500 "></div>
              <p className="flex-1 px-2 text-sm">Estudar React</p>
              <div className="flex gap-2 items-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <SquarePen size={16} className="cursor-pointer" />
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Editar Tarefa</DialogTitle>
                    </DialogHeader>

                    <div className="flex gap-2">
                      <Input placeholder="Editar Tarefa" />
                      <Button className="cursor-pointer">Editar</Button>
                    </div>
                  </DialogContent>
                </Dialog>
                <Trash2 size={16} className="cursor-pointer" />
              </div>
            </div>
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
