var a=["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for(var i=0 ; i<a.length; i++)
{
    var c=a[i].charAt(0);
    if(c =="j" || c =="J")
    console.log("Good Bye " + a[i]);
    else
    console.log("Hello " + a[i]);
}
