const getCliente = async (getRota) =>{
    const search = await fetch(`https://resilia-marketplace.herokuapp.com/clients/email/${getRota}`,  {
        headers: {
          'Access-Control-Allow-Origin':'*',
          'Content-Type': 'application/json'
        }
      });
    const response = await search.json();
    return response
}

export default getCliente;
