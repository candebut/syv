import { proxy } from 'valtio'

const state = proxy({
    intro: false,
    colors: ['#ccc', '#EFBD4E', '#80C670', '#726DE8', '#EF674E', '#353934'],
    decals: ['react', 'three2', 'pmndrs'],
    color: '#EFBD4E',
    decal: 'three2',
    textColor: '#FFFFF',
})

export { state }
