import Loki from 'lokijs'

export const db = new Loki('goods', {
    autoload: true,
    autoloadCallback: databaseInitialize,
    autosave: true,
    autosaveInterval: 3000,
    persistenceMethod: "localStorage"
})

// 创建集合 
function databaseInitialize() {
    const comments = db.getCollection('comments');
    if (comments == null) {
        db.addCollection('comments');
    }
}

export function loadCollection(collection) {
    return new Promise(resolve => {
        db.loadDatabase({}, () => {
            const _collection = db.getCollection(collection);
            resolve(_collection);
        })
    })
}