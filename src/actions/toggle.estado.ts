"use server";
import { prisma } from "@/utils/prisma";

export const updateTarefaEstado = async (tarefaId: string) => {
  try {
    const currentTarefa = await prisma.tarefas.findUnique({
      where: { id: tarefaId },
    });

    if (!currentTarefa) return;

    const updateEstado = await prisma.tarefas.update({
      where: { id: tarefaId },
      data: { estado: !currentTarefa.estado },
    });

    if (!updateEstado) return;

    return updateEstado;
  } catch (error) {
    throw error;
  }
};
