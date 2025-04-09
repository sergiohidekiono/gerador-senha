interface BarraProps {
    corFundo: string;
}

export default function (props: BarraProps) {
    return (
        <span
            className={`ml-2 p-1.5 w-3 h-8 rounded-sm border-gray-100 border-2 ${props.corFundo}`}
        ></span>
    );
}
