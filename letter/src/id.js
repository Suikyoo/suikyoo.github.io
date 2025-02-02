
const idGenerator = {}

const getId = (register) => {
    return idGenerator[register]++;
}
const createRegister = (register) => {
    idGenerator[register] = 0;
}
const updateRegister = (register, currId) => {
    idGenerator[register] = currId;
}

export { idGenerator, getId, createRegister, updateRegister };
