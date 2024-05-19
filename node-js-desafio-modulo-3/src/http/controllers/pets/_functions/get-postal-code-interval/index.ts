export enum StateCode {
    SP = 'São Paulo',
    RJ = 'Rio de Janeiro',
    ES = 'Espirito Santo',
    MG = 'Minas Gerais',
    BA = 'Bahia',
    SE = 'Sergipe',
    PE = 'Pernambuco',
    AL = 'Alagoas',
    PB = 'Paraiba',
    RN = 'Rio Grande do Norte',
    CE = 'Ceará',
    PI = 'Piauí',
    MA = 'Maranhão',
    PA = 'Pará',
    AP = 'Amapá',
    AM = 'Amazonas',
    RR = 'Roraima',
    AC = 'Acre',
    DF = 'Distrito Federal',
    GO = 'Goiás',
    TO = 'Tocantins',
    MT = 'Mato Grosso',
    RO = 'Rondônia',
    MS = 'Mato Grosso do Sul',
    PR = 'Paraná',
    SC = 'Santa Catarina',
    RS = 'Rio Grande do Sul',
}

export function getPostalCodeInterval(stateCode: StateCode) {
    switch (stateCode) {
        case StateCode.SP:
            return {
                minInterval: 1000000,
                maxInterval: 19999999,
            }
        case StateCode.RJ:
            return {
                minInterval: 20000000,
                maxInterval: 28999999,
            }
        case StateCode.ES:
            return {
                minInterval: 29000000,
                maxInterval: 29999999,
            }
        case StateCode.MG:
            return {
                minInterval: 30000000,
                maxInterval: 39999999,
            }
        case StateCode.BA:
            return {
                minInterval: 40000000,
                maxInterval: 48999999,
            }
        case StateCode.SE:
            return {
                minInterval: 49000000,
                maxInterval: 49999999,
            }
        case StateCode.PE:
            return {
                minInterval: 50000000,
                maxInterval: 56999999,
            }
        case StateCode.AL:
            return {
                minInterval: 57000000,
                maxInterval: 57999999,
            }
        case StateCode.PB:
            return {
                minInterval: 58000000,
                maxInterval: 58999999,
            }
        case StateCode.RN:
            return {
                minInterval: 59000000,
                maxInterval: 59999999,
            }
        case StateCode.CE:
            return {
                minInterval: 59000000,
                maxInterval: 59999999,
            }
        case StateCode.PI:
            return {
                minInterval: 64000000,
                maxInterval: 64999999,
            }
        case StateCode.MA:
            return {
                minInterval: 65000000,
                maxInterval: 65999999,
            }
        case StateCode.PA:
            return {
                minInterval: 66000000,
                maxInterval: 68899999,
            }
        case StateCode.AP:
            return {
                minInterval: 68900000,
                maxInterval: 68999999,
            }
        case StateCode.AM:
            return {
                minInterval: 69000000,
                maxInterval: 69899999,
            }
        case StateCode.RR:
            return {
                minInterval: 69300000,
                maxInterval: 69389999,
            }
        case StateCode.AC:
            return {
                minInterval: 69900000,
                maxInterval: 69999999,
            }
        case StateCode.DF:
            return {
                minInterval: 70000000,
                maxInterval: 73699999,
            }
        case StateCode.GO:
            return {
                minInterval: 73999999,
                maxInterval: 76799999,
            }
        case StateCode.TO:
            return {
                minInterval: 77000000,
                maxInterval: 77995999,
            }
        case StateCode.MT:
            return {
                minInterval: 78000000,
                maxInterval: 78899999,
            }
        case StateCode.RO:
            return {
                minInterval: 78900000,
                maxInterval: 78999999,
            }
        case StateCode.MS:
            return {
                minInterval: 79000000,
                maxInterval: 79999999,
            }
        case StateCode.PR:
            return {
                minInterval: 80000000,
                maxInterval: 87999999,
            }
        case StateCode.SC:
            return {
                minInterval: 88000000,
                maxInterval: 89999999,
            }
        case StateCode.RS:
            return {
                minInterval: 90000000,
                maxInterval: 99999999,
            }
        default:
            return {
                minInterval: 0,
                maxInterval: 0,
            }
    }
}
