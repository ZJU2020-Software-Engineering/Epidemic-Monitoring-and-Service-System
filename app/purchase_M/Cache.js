class Cache {
    static storage=[];
    static find(key){
        return Cache.storage.find((item)=>{return item.key==key;});
    }
    static set(key,value){
        result=Cache.find(key);
        if(result==undefined)
            Cache.storage.push({key:key, value:value});
        else{
            //Cache.delete(key);
            //Cache.storage.push({key:key, value:value});
        }
    }

    static delete(key){
        Cache.storage=Cache.storage.filter(
            (item)=>{return item.key!=key;}
        );
    }

    static get(key){
        if(Cache.find(key)==undefined)
            return false;
        return Cache.find(key).value;
    }
};
export default Cache;
