"use server"
import { prisma } from "@/utils/prisma"

export const NovaTarefa = async (tarefa: string) => {
   try{
 if(!tarefa) return

    const newTarefa = await prisma.tarefas.create({
        data: {tarefa: tarefa
        }
    })

    if(!newTarefa) return
    return newTarefa
   } catch (error) {
    throw error
   }

}