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

    let results = GetFizzBuzz(startValue, endValue);
    DisplayResults(results);


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
function DisplayResults(results)
{
    let tbdody = document.getElementById("tableresult");
    let template =  document.getElementById("fbtemplate");
    tbdody.innerHTML="";

    for(var i = 0; i < results.length; i+=5)
    {
        let tableRow = document.importNode(template.content,true);
        let rowCols =  tableRow.querySelectorAll("td");
        FillOutTableData(rowCols,results,i);
        tbdody.appendChild(tableRow);
    }


}
function FillOutTableData(rowCols,results,index)
{
    for(var i=0; i < rowCols.length; i++)
    {
        rowCols[i].classList.add(results[index]);
        rowCols[i].textContent = results[index];
        index++;
    }

}


function IsValidEntry(value)
{
    let sValue = parseInt(value);
    return (Number.isInteger(sValue));
    
}

