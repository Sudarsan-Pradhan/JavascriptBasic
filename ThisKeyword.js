var address =
{
company:"Wipro",
city:"Greater Noida",
state:"Uttar Pradesh",
fullAddress:function()
{  

    return this.company+" "+this.city+" "+this.state;  

}  
}

var fetch = address.fullAddress();
console.log(fetch);