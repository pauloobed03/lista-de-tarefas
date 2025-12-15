"use server"
import { prisma } from "@/utils/prisma"

 export const getTarefas = async () => {
   try {
     const tarefas = await prisma.tarefas.findMany()

    if(!tarefas) return

    console.log(tarefas)
    return tarefas
   } catch (error){
    throw error
   }
   
}