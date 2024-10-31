function ListaSimples({ lista }) {
    return (
        <ul className="list-group">
            {/* .map sempre retorna um array do tamanho do original */}
            {lista.map((item, index) => (
                <li key={index} style={{ margin: '5px' }}>
                    {item}
                </li>
            ))}
        </ul>
    );
}

export default ListaSimples;
