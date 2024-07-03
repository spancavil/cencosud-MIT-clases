const message = "Hola mundo"
console.log(typeof message)

const stringArrays: Array<string> = ["barco", "termo", "celular"]
const stringArrays2: string[] = []

const point = {
    x: 1,
    y: 3,
}

console.log(`El objeto tiene coordenadas: ${point.x}, ${point.y}`)

interface PointWithInterface {
    x: number,
    y: number,
}

type PointWithType = {
    x: number,
    y: number | null,
}

const point2: PointWithInterface = {
    x: 30,
    y: 25
}

const point3: PointWithType = {
    x: 15,
    y: 10
}

// const point2: PointWithInterface = {
//     x: 4,
//     y: 7,
// }

