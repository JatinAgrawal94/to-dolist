
var sideBar=document.getElementById('sidebar')   //sidebar
var navBut=document.getElementById('navbut') 	//navbar button
var search=document.getElementById('search') 		// search bar

// filer bar declarations
var filterLink=document.querySelectorAll('.filter-link') 
var filterBar=document.getElementById('filter-bar') 

var addTask=document.getElementById('add')

// task id values


// Popup declarations
var popUp=document.getElementById('popup')
var popExit=document.getElementById('pop-exit')
// var taskName=document.getElementById('task-name')
// var taskDue=document.getElementById('task-due')
// var taskType=document.getElementById('task-type')
// var taskPrio=document.getElementById('task-prio')
// var taskDesc=document.getElementById('task-desc')
var taskSubmit=document.getElementById('task-submit')
var taskArea=document.getElementById('task-area')


addTask.addEventListener('click',()=>{   // addtask button listener
	popUp.style="display:block;"
})

popExit.addEventListener('click',()=>{  //popup exit button
	popUp.style="display:none;"
})


navBut.addEventListener('click',()=>{

	if(sideBar.style.display== "block")
	{
		sideBar.style="display:none;";
	}
	else{
		sideBar.style="display:block;";
	}
	
})


taskSubmit.addEventListener('click',()=>{

	var box=document.createElement('div');
	box.style="float:left;background-color:yellow;width:98%;height:4em;border:2px solid black;margin-top:1em;"
	console.log("this is an event");
	 var check=document.createElement('input');
	 check.setAttribute('type','checkbox');
	 check.style="float: left;  margin-top:1.7em;margin-left:1.5em;height:1.3rem;width:1.3rem;"

	 var tid=document.createElement('p');
	 tid.style="float: left;margin-top:1rem;margin-left:1em;font-size: 25px;"
	 tid.textContent="2223";

	 var tname=document.createElement('p');
	 tname.style="float: left;margin-top:1rem;margin-left:1em;font-size: 25px;"
	 tname.textContent="jatinagrawal"

	var tstatus=document.createElement('select')
	tstatus.value="taskstatus"
	tstatus.style=" margin-top:1.3em;margin-left:3em;font-size: 16px;"
	var options=["Not Started","In progress","In Review","Completed","Cancelled"];

	for(let i=0;i<5;i++)
	{
		var opt=document.createElement("option");
		opt.value=options[i];
		opt.textContent=options[i];
		tstatus.appendChild(opt);
		console.log(i);
	}
	

	// var due=document.createElement('input');
	// due.setAttribute('type','date');
	// due.style="margin-left:4em;font-size: 15px;"


	// var priority=document.createElement('select')
	// priority.style=" margin-left:4em;font-size: 15px;"

	// var p=document.createElement("option")
	// var prio=["Not Started","In progress","In Review","Completed","Cancelled"];
	// for(let i=0;i<4;i++)
	// {
	// 	p.textContent(prio[i]);
	// 	priority.appendChild(p);
	// }

	 box.appendChild(check);
	box.appendChild(tid);
	box.appendChild(tname);
	box.appendChild(tstatus);
	// box.appendChild(due);
	// box.appendChild(priority);
	taskArea.appendChild(box);
	popUp.style="display:none;"
})