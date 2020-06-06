var fs=require('fs');

class VolunteerIdDistributor{
    constructor(){
        var data;
        try{
            data=fs.readFileSync("./volunteer_id.txt");
        }catch(error){
            console.log(error);
        }
        if( data == undefined ){
            this.no=0;
            fs.writeFileSync("./volunteer_id.txt",0);
        }
        else{
            this.no=parseInt(data);
        }
        setInterval(()=>{
            fs.writeFileSync("./volunteer_id.txt",this.no);
        },600000);
    }

    volunteerIdAddOne(){
        this.no++;
    }

    getVIDforOrder(){
        var vid=parseInt(Math.random()*this.no+1);
        if(this.no<=0){
            return false;
        }
        else{
            return vid.toString();
        }
    }

    getID(){
        this.volunteerIdAddOne();
        fs.writeFileSync("./volunteer_id.txt",this.no);//这里会严重影响性能，建议在实装时删去
        return this.no.toString();
    }
}


class OrderIdDistributor{
    constructor(){
        var data;
        this.dateTime=this.getDate();
        try{
            data=fs.readFileSync("./order_id.txt");
        }catch(error){
            console.log(error);
        }
        if( data == undefined ){
            this.no=0;
            fs.writeFileSync("./order_id.txt",0);
        }
        else{
            this.no=parseInt(data);
        }
        setInterval(()=>{
            fs.writeFileSync("./order_id.txt",this.no);
            this.dateTime=this.getDate();
        },60000);
    }

    getDate(){
        var date=new Date();
        var year=date.getFullYear().toString();
        var month=(date.getMonth()+1).toString();
        var day=date.getDate().toString();
        var dateTime=year+"-"+month+"-"+day+" ";
        return dateTime;
    }

    orderIdAddOne(){
        this.no++;
    }

    orderIdClear(){
        this.no=0;
    }

    getOrderID(){
        this.orderIdAddOne();
        fs.writeFileSync("./order_id.txt",this.no);//这里会严重影响性能，建议在实装时删去
        return this.dateTime+this.no.toString();
    }
}

module.exports={
    VolunteerIdDistributor,
    OrderIdDistributor
}