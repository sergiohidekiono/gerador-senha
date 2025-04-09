"use client";
import CheckboxValidacao from "@/components/checkboxValidacao";
import ExibeSenha from "@/components/exibeSenha";
import ForcaSenha from "@/components/forcaSenha";
import opcoes from "@/data/opcoesCaracteres";
import Senha from "@/model/senha";
import { useEffect, useState } from "react";

export default function Home() {
    const [tamanho, setTamanho] = useState(8);
    const [tiposCaracteres, setTiposCaracteres] = useState(opcoes);
    const [senha, setSenha] = useState("");
    const [forcaSenha, setForcaSenha] = useState(1);

    useEffect(() => {
        setForcaSenha(Senha.calcularForca(tamanho, tiposCaracteres));
    }, [tamanho, tiposCaracteres]);

    const handleChange = (index: number) => {
        const aux = [...tiposCaracteres];
        aux[index].valor = !aux[index].valor;
        setTiposCaracteres(aux);
    };

    const gerarSenha = () => {
        const novaSenha = Senha.gerarSenha(tamanho, tiposCaracteres);
        setSenha(novaSenha);
    };

    return (
        <main className="w-screen flex flex-col items-center justify-center h-full">
            <h1 className="text-xl text-gray-200 mb-4 text-center font-bold">
                Gerador de Senhas
                <div className="bg-slate-700 text-gray-200 rounded-md p-8">
                    <div className="flex flex-col gap-3 text-2xl ">
                        <label className="flex justify-between">
                            <span>Tamanho da Senha:</span>
                            <span className="text-blue-500">{tamanho}</span>
                        </label>
                        <input
                            type="range"
                            min={3}
                            max={30}
                            value={tamanho}
                            onChange={(e) => setTamanho(+e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col mr-3">
                        {tiposCaracteres.map((item, i) => (
                            <CheckboxValidacao
                                id={opcoes[i].id}
                                key={opcoes[i].id}
                                nome={opcoes[i].nome}
                                valor={tiposCaracteres[i].valor}
                                handleChange={() => handleChange(i)}
                            />
                        ))}
                    </div>
                    <ForcaSenha forca={forcaSenha} />
                    <button
                        className={`
                      text-white bg-blue-500 text-lg font-bold w-full rounded p-2 mt-3`}
                        onClick={() => gerarSenha()}
                    >
                        Gerar Senha
                    </button>
                    <ExibeSenha senha={senha} />
                </div>
            </h1>
        </main>
    );
}
