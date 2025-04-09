export interface CheckboxValidacaoProps {
    id: string;
    nome: string;
    valor: boolean;
    handleChange: () => void;
}

export default function CheckboxValidacao(props: CheckboxValidacaoProps) {
    const id = `checkbox-${props.id}`;
    return (
        <div className="flex text-xl gap-2">
            <input
                id={id}
                type="checkbox"
                checked={props.valor}
                onChange={() => props.handleChange()}
            />
            <label htmlFor={id}>{props.nome}</label>
        </div>
    );
}
