import Realm from "realm";


const Cat = {
    name: "Cat",
    properties: {
        _id: "objectId",
        name: "string",
        type: "string",
    },
};

export default () => {


    return new Promise<Realm>(async (resolve, reject) => {

        try {
            const realm = await Realm.open({
                schema: [Cat],
            });
            resolve(realm);
        } catch (error) {
            reject(error);
        }
    })

}