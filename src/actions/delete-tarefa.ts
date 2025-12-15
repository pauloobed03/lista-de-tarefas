"use server"

import { Prisma } from "@/generated/prisma"
import { prisma } from "@/utils/prisma"

export const deleteTarefa = async (idtarefa: string) => {
        try{
            if(!idtarefa) return


            const deleteTarefa = await prisma.tarefas.delete({
                where:{
                    id: idtarefa
                }
            })

            if(!deleteTarefa) return

            return deleteTarefa
        }catch(error){
            throw error
        }
}