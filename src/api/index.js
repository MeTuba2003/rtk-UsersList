import Chance from "chance";

const chance = Chance();

export const dummyUsers = ()=> {
    return chance.name({middle : true})
}

