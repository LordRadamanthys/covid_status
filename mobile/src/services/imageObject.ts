
function getImages(state: string) {
    switch (state) {
        case 'SP':
            return require('../assets/states/SP.png')
        case 'AC':
            return require('../assets/states/AC.png')

        case 'AL':
            return require('../assets/states/AL.png')
        case 'AC':
            return require('../assets/states/AC.png')

        case 'AM':
            return require('../assets/states/AM.png')
        case 'AP':
            return require('../assets/states/AP.png')

        case 'BA':
            return require('../assets/states/BA.png')
        case 'CE':
            return require('../assets/states/CE.png')

        case 'DF':
            return require('../assets/states/DF.png')

        case 'ES':
            return require('../assets/states/ES.png')

        case 'GO':
            return require('../assets/states/GO.png')

        case 'MA':
            return require('../assets/states/MA.png')

        case 'MS':
            return require('../assets/states/MS.png')

        case 'MT':
            return require('../assets/states/MT.png')

        case 'MG':
            return require('../assets/states/MG.png')

        case 'PA':
            return require('../assets/states/PA.png')

        case 'PB':
            return require('../assets/states/PB.png')

        case 'PE':
            return require('../assets/states/PE.png')

        case 'PI':
            return require('../assets/states/PI.png')

        case 'PR':
            return require('../assets/states/PR.png')

        case 'RJ':
            return require('../assets/states/RJ.png')

        case 'RN':
            return require('../assets/states/RN.png')

        case 'RO':
            return require('../assets/states/RO.png')

        case 'RR':
            return require('../assets/states/RR.png')

        case 'RS':
            return require('../assets/states/RS.png')

        case 'SC':
            return require('../assets/states/SC.png')

        case 'SE':
            return require('../assets/states/SE.png')



        case 'TO':
            return require('../assets/states/TO.png')
        default:
            break;
    }
}


export default getImages