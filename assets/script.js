// Toggle navbar and images

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }


   // Toggle Button

   function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }


  // Pop Up Chat Button


function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


// top

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
    window.scrollY >= 500 ? goTopBtn.classList.add("active")
        : goTopBtn.classList.remove("active");
});








// fetch


const api_url="assets/API.json";



async function getdata(url){
   await fetch(url).then((res)=>{
        console.log(res);
        return res.json();

    }).then((data)=>{
        console.log(data);
        show(data);
    })   
}

getdata(api_url);

function hideloader(){
    document.getElementById('loading').style.display='none';

    document.getElementById('loading1').style.display='none';

    document.getElementById('loading2').style.display='none';
}

function show(data){
    let table=
    `<tr>
    <th><h3>Id</h3></th>
    <th><h3>Title</h3></th>
    <th><h3>Video</h3></th>
    <th><h3>Desc</h3></th>
    </tr>`;


    for(let tbl of data){
        table += 
        `<tr>
        <td>  ${tbl.id}.  </td>
        <td>  ${tbl.title}  </td>
        <td>  <video src="${tbl.video}" width="150px" height="150px" controls></video>   </td>
        <td>  ${tbl.description}  </td>
        </tr>`;
    }

    document.getElementById("gittable").innerHTML=table;
}