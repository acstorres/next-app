import Link from 'next/link';

function ClientsPage()  {

    const clients = [
        { id: "ana", name: "Ana"},
        { id: "isa", name: "Isaac"},
    ];
    return (
        <div>
            <h1>The Client Page</h1>
            <ul>
               {clients.map(client => <li key={client.id}>
                   <Link href={`/clients/${client.id}`}>{client.name}</Link>
               </li>)}

            </ul>
        </div>
    );
}

export default ClientsPage;