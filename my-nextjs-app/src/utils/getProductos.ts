export type Producto = {
    id: number;
    nombre: string;
    descripcion: string;
    imagen: string;
    precio: number;
};

export function getMockProductos(): Producto[] {
    return [
        {
            id: 1,
            nombre: 'Producto 1',
            descripcion: 'Descripción del Producto 1',
            imagen: 'https://via.placeholder.com/150',
            precio: 10.99
        },
        {
            id: 2,
            nombre: 'Producto 2',
            descripcion: 'Descripción del Producto 2',
            imagen: 'https://via.placeholder.com/150',
            precio: 20.99
        },
        {
            id: 3,
            nombre: 'Producto 3',
            descripcion: 'Descripción del Producto 3',
            imagen: 'https://via.placeholder.com/150',
            precio: 30.99
        },
        {
            id: 4,
            nombre: 'Producto 4',
            descripcion: 'Descripción del Producto 4',
            imagen: 'https://via.placeholder.com/150',
            precio: 40.99
        },
        {
            id: 5,
            nombre: 'Producto 5',
            descripcion: 'Descripción del Producto 5',
            imagen: 'https://via.placeholder.com/150',
            precio: 50.99
        }
    ];
}