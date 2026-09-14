export function LogClass(constructor: Function) {
    console.log(`Osztály létrehozva: ${constructor.name}`);
   
}

export function LogMethod(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`Metódust meghívták: ${propertyKey}`);
        return originalMethod.apply(this, args);
    }
}