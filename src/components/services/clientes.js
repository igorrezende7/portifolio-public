import Api from "./api";

const ClienteService = {
    Send:(params) => Api.post('/clientes', params)
}

export default ClienteService