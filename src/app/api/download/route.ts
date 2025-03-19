import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import DownloadModel from "@/models/Download";

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    
    const { name, email, company } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ message: "Nome e email são obrigatórios" }, { status: 400 });
    }

    const newDownload = new DownloadModel({ name, email, company });
    await newDownload.save();

    return NextResponse.json({ message: "Dados salvos com sucesso!" }, { status: 201 });
  } catch (error) {
    console.error("Erro ao salvar no MongoDB:", error);
    return NextResponse.json({ message: "Erro interno do servidor" }, { status: 500 });
  }
}
