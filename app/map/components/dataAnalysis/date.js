export var year;
export default function dateTansfer(date){
	date = new Date(date.getTime())
	var s="";
	year=date.getFullYear();
	s+=year+'-';
	if(date.getMonth()+1<10) s+="0";
	s+=date.getMonth()+1+"-";
	if(date.getDate()<10) s+="0";
	s+=date.getDate();
	
	return s;	
}