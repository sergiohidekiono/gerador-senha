import { IconCopy } from "@tabler/icons-react";
import { useState } from "react";

interface ExibeSenhaProps {
    senha: string;
}

export default function ExibeSenha(props: ExibeSenhaProps) {
    const [mostrarAviso, setMostrarAviso] = useState(false);
    const copiar = () => {
        navigator.clipboard.writeText(props.senha);
        setMostrarAviso(true);
        setTimeout(() => setMostrarAviso(false), 2000);
    };
    return (
        <div className="mt-3">
            {props.senha.trim() !== "" && (
                <>
                    <span className="font-bold text-lg">Senha Gerada:</span>
                    <div className="p-2 border bg-gray-100 rounded text-slate-800 flex justify-between items-center">
                        {props.senha}
                        <IconCopy
                            className="hover:text-blue-500 cursor-pointer"
                            onClick={() => copiar()}
                        />
                    </div>
                </>
            )}

            {mostrarAviso && (
                <span className="text-green-500">
                    Senha copiada com sucesso
                </span>
            )}
        </div>
    );
}
