import Api from "./api";

const ClienteService = {
    Send:(params) => Api.post('/clientes', params),
    SendEmail: (params) => Api.post('/clientes/send', params)
}

export default ClienteService