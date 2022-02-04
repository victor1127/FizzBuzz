function GetValues()
{
    let startValue= document.getElementById("startvalue").value;
    let endValue= document.getElementById("endtvalue").value;
    let isValidStartValue= IsValidEntry(startValue);
    let isValidEndValue= IsValidEntry(endValue);

    if(!isValidStartValue || !isValidEndValue)
    {
        alert("Enter interger values only");
        return;
    }

    let numbers = GetFizzBuzz(startValue, endValue);
    DisplayResults(numbers);


}
function GetFizzBuzz(value,endValue)
{
    let output=[];
    let message="";

    for(let i=value;i<=endValue;i++)
    {
        if(i%3==0) message+="Fizz";
        if(i%5==0) message+="Buzz";
        if(message=="") message=i;    
        
        output.push(message);
        message="";
    }

    return output;


}
function DisplayResults(numbers)
{
    let numTemplate="";
    numbers.forEach(number => {

        numTemplate += `<tr><td>${number}</td></tr>`;
    
    });

    document.getElementById("tableresult").innerHTML=numTemplate;

}
function IsValidEntry(value)
{
    let sValue = parseInt(value);
    return (Number.isInteger(sValue));
    
}

