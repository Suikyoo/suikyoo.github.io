const idGenerator = {}

const getId = (register) => {
    return idGenerator[register]++;
}
const createRegister = (register) => {
    idGenerator[register] = 0;
    console.log(idGenerator[register]);
}
const updateRegister = (register, currId) => {
    idGenerator[register] = currId;
}

module.exports = { 
    idGenerator, 
    getId, 
    createRegister, 
    updateRegister 
};
