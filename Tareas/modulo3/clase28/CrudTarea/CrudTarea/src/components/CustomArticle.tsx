

interface CustomArticle {
        producto: { id: number; nombre: string; precio: number }; // Tipado correcto
        handleUpdate: (producto: any) => void; // Recibe función del padre
        handleDelete: (id: number) => void;    // Recibe función del padre
    }

export default function CustomArticle ({producto, handleUpdate, handleDelete}: CustomArticle) { // Usa un nombre descriptivo para la interfaz
    
    return (
        <>
        <article className="CustomArticle">
            <h3>{producto.nombre}</h3>
            <h4>${producto.precio}</h4>
            {/* Al hacer click, ejecutas la función del padre pasándole el dato que necesita */}
            <button onClick={() => handleUpdate(producto)}>Editar</button>
            <button onClick={() => handleDelete(producto.id)}>Eliminar</button>
        </article>
        </>
    );
}

