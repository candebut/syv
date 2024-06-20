import { proxy } from 'valtio'

const state = proxy({
    intro: false,
    colors: ['ccc', 'EFBD4E', '80C670', '726DE8', 'EF674E', '353934'],
    decals: ['react', 'three2', 'pmndrs'],
    color: 'negro',
    decal: 'three2',
    textColor: '#FFFFF',
    font: '',
    fontSize: '12px',
    newColors: [
        {
            label: 'petroleo',
            value: '185c78'
        },
        {
            label: 'ocre',
            value: 'dda32e'
        },
        {
            label: 'adoquin',
            value: '363c3c'
        },
        {
            label: 'uva',
            value: '5d2052'
        },
        {
            label: 'blanco',
            value: 'ffffff'
        },
        {
            label: 'chocolate',
            value: '403735'
        },
        {
            label: 'rojo',
            value: 'af0826'
        },
        // {
        //     label: 'gris',
        //     value: 'b5b5ad'
        // },
        {
            label: 'militar',
            value: '84876c'
        },
        // {
        //     label: 'topo',
        //     value: '373633'
        // },
        {
            label: 'nude',
            value: 'b9adaa'
        },
        {
            label: 'marino',
            value: '23243c'
        },
        {
            label: 'negro',
            value: '000000'
        },

    ]
})

export { state }
