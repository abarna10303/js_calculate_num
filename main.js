var num=prompt("How much number to be calculate");
var sum=0;
for(i=1;i<=num;i++)
{
    var value=parseInt(prompt("Enter the numbers"));
    sum=sum+value;
}
document.write("The sum of number is " +sum)