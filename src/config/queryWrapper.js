import Pool from "./database/database.js";

export const getConnection = async () => {
    return new Promise(async (resolve, reject) => {
        Pool.getConnection(function (err, connection) {
            if (err) {
                reject(err);
            } else {
                resolve(connection);
            }
        });
    });
};

export const execute = async function (query, bindValuesArray) {
    return new Promise(async (resolve, reject) => {
        const connection = await getConnection();
        try {
            connection.query(query, bindValuesArray, function (err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        } catch (e) {
            reject(e);
        } finally {
            connection.release();
        }
    });
};
