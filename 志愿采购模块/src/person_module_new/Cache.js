class Cache{
    static storage=[];//In the form of {key: xxx, value:xxx} both key and value are string
    static find(key){
        return Cache.storage.find((item)=>{return item.key==key;});
    }
    static set(key,value){
        result=Cache.find(key);
        if(result==undefined)
            Cache.storage.push({key:key, value:value});
        else{
            Cache.delete(key);
            Cache.storage.push({key:key, value:value});
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

    /*
    *Item is in the form of:
    *{id:xxx,price:xxx,count:xxx,pic:xxx}
    */
    static existItem(itemName, key='itemList'){
        const list = Cache.get(key);
        if(list==false){
            return false;
        }
        return list.split(';;').map((item) => { return JSON.parse(item); }).filter((value) => { return value.id == itemName; }).length > 0;
    }

    static itemNoPlus(itemName, addAmount, key='itemList'){
        const list = Cache.get(key);
        if(list==false)
            return false;
        Cache.set(key,
            list.split(';;').map(
                (item)=>{
                    var i=JSON.parse(item);
                    if(i.id==itemName){
                        console.log(i)
                        if(addAmount+i.count<0){

                        }
                        else{
                            i.count=i.count+addAmount;
                        }
                        return i;
                    }
                    else{
                        return i;
                    }
                }
            ).map(
                (value)=>{return JSON.stringify(value)}
            ).join(';;')
        );
    }
    static  addItem(value, key='itemList' ){
        const list =  Cache.get(key);
        const exist = this.existItem(value.id);
        // console.log(list);
        if(list==false){
            // console.log(value);
            Cache.set(key,JSON.stringify(value));
        }
        else if(!exist){
            Cache.set(key,[list,JSON.stringify(value)].join(';;'));
        }
        else{
            this.itemNoPlus(value.id,1);
        }
    }

    static getItemNo(itemName,key='itemList'){
        const list = Cache.get(key);
        if(list==false)
            return -1;
        return list.split(';;').map((item)=>{
            return JSON.parse(item);
        }).filter((item)=>{
            return item.id==itemName;
        }).reduce((sum,item)=>{return sum+item.count},0);
    }

    static deleteItem(itemName, key='itemList'){
        const list=Cache.get(key);
        if(list==false)
            return;
        Cache.set(key,
            list.split(';;').map(
                (item)=>{return JSON.parse(item);}
            ).filter(
                (value)=>{return value.id!=itemName;}
            ).map(
                (value)=>{return JSON.stringify(value)+';;'}
            ).join(';;')
        );
    }

    static calPrice(price){
        var mid=price.split('').filter(
            (char)=>{
                return char=='.'||char=='1'||char=='2'||char=='3'||char=='4'||char=='5'||char=='6'||char=='7'||char=='8'||char=='9'||char=='0';
            }
        ).reduce((sum,value)=>{return sum+value},'');
        if(parseFloat(mid)==NaN)
            return 0;
        else
            return parseFloat(mid);
    }

    static countPrice(key='itemList'){
        const list = Cache.get(key);
        if(list==false)
            return 0;
        const sum= list.split(';;').map(
                    (item) => { return JSON.parse(item); }
                ).map(
                    (item)=>{return Cache.calPrice(item.price)*item.count;}
                ).reduce(
                    (sum, value) => { return sum + value; },0
                );
        console.log(list.split(';;').map(
            (item) => { return JSON.parse(item); }
        ));
        return sum;
    }

    static getItemList(key='itemList'){
        const list = Cache.get(key);
        if(list==false)
            return [];
        return list.split(';;').map((item) => { return JSON.parse(item); });
    }

    static clearItems(key='itemList'){
        return Cache.delete(key);
    }

}

export default Cache;
