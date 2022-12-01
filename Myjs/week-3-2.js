function profile()
{
    let key="<table>";
    let arr=[
        {Course_Details:"Bachelor of Technology",Institution:"Keshav Memorial Institute of Technology",UniversityorBoard:"JNTUH",Year_of_passing:"2025",CGPA:"8.9"},
        {Course_Details:"Intermediate-MPC",Institution:"Sri Chaitany Junior College,TS",UniversityorBoard:"TSBIE",Year_of_passing:"2021",CGPA:"97.8%"},
        {Course_Details:"School of Secondary Certificate",Institution:"Sri Chaitanya Techno School",UniversityorBoard:"SSC",Year_of_passing:"2019",CGPA:"10"},
    ];
    key+="<tr>"
    key+="<th>"+"Course-Details"+"</th>";
    key+="<th>"+"Institution"+"</th>";
    key+="<th>"+"University/Board"+"</th>";
    key+="<th>"+"Year of passing"+"</th>";
    key+="<th>"+"CGPA"+"</th>";
    key+="</tr>"
    for(let i=0;i<arr.length;i++)
    {
        key+="<tr>";
        key+="<td>"+arr[i].Course_Details+"</td>";
        key+="<td>"+arr[i].Institution+"</td>";
        key+="<td>"+arr[i].UniversityorBoard+"</td>";
        key+="<td>"+arr[i].Year_of_passing+"</td>";
        key+="<td style='width:100px;'>"+arr[i].CGPA+"</td>";
        key+="</tr>";

    }
    key+="</table>";
    let x=document.getElementById("table");
    x.innerHTML=key;

    
}

