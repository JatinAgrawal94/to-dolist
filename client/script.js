
var sideBar=document.getElementById('sidebar')   //sidebar
var navBut=document.getElementById('navbut') 	//navbar button
var search=document.getElementById('search') 		// search bar

// filer bar declarations
var filterLink=document.querySelectorAll('.filter-link') 
var filterBar=document.getElementById('filter-bar') 

var addTask=document.getElementById('add')

// task id values
var TASKID=0000;

// Popup declarations
var popUp=document.getElementById('popup')
var popExit=document.getElementById('pop-exit')
//popup fields
var taskName=document.getElementById('task-name')
var taskDue=document.getElementById('task-due')
var taskType=document.getElementById('task-type')
var taskPrio=document.getElementById('task-prio')
var taskDesc=document.getElementById('task-desc')
// intialisation of popup fields
taskName.value=""
taskType.value=""


var taskSubmit=document.getElementById('task-submit')
var taskArea=document.getElementById('task-area')

taskName.addEventListener('keyup',addKeyPress,false);
taskDue.addEventListener('keyup',addKeyPress,false);
taskType.addEventListener('keyup',addKeyPress,false);	
taskPrio.addEventListener('keyup',addKeyPress,false);
taskDesc.addEventListener('keyup',addKeyPress,false);


addTask.addEventListener('click',()=>{   // addtask button listener
	popUp.style="display:block;"
})

popExit.addEventListener('click',()=>{
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
	box.style="float:left;background-color:yellow;width:98%;height:4em;border:2px solid black;margin-top:1em;display:flex;"
	
	 var check=document.createElement('input');
	 check.setAttribute('type','checkbox');
	 check.style="float: left;  margin-top:1.7em;margin-left:1.5em;height:1.3rem;width:1.3rem;"

	 var tid=document.createElement('p');
	 tid.style="float:left;margin-top:1rem;margin-left:1em;font-size:25px;"
	 tid.textContent=taskValue(TASKID.toString());

	 var tname=document.createElement('p');
	 tname.style="float:left;margin-top:1rem;margin-left:1em;font-size:25px;width:19%;text-align:center;";
	tname.textContent=taskName.value;

	var tstatus=document.createElement('select')
	tstatus.style="margin-left:3em;font-size: 16px;width:19%;text-align:center;height:2em;margin-top:1em;"
	var options=["Not Started","In progress","In Review","Completed","Cancelled"];

	for(let i=0;i<5;i++)
	{
		var opt=document.createElement("option");
		opt.value=options[i];
		opt.textContent=options[i];
		tstatus.appendChild(opt);
	}

	var due=document.createElement('input');
	due.setAttribute('type','date');
	due.style="margin-left:4em;font-size: 15px;width:20%;text-align:center;height:2em;margin-top:1em;"
	due.value=taskDue.value;

	var priority=document.createElement('select')
	priority.style=" margin-left:4em;font-size: 15px;width:19%;text-align:center;height:2em;margin-top:1em;"
	
	
	var prio=["Top","Middle","Last"];

	for(let i=0;i<3;i++)
	{
		var p=document.createElement("option")
		p.textContent=prio[i];
		priority.appendChild(p);
	}
	
	box.appendChild(check);
	box.appendChild(tid);
	box.appendChild(tname);
	box.appendChild(tstatus);
	box.appendChild(due);
	box.appendChild(priority);
	taskArea.appendChild(box);
	popUp.style="display:none;"
	TASKID++;
})

// addTask.addEventListener('keyup',checkKeyPress,false);	

function taskValue(number){  //function to control the value of taskId
	if(number<10)
	{
		number="00"+number;
	}
	else
	{
		number+="0";
	}
	return number;
}


function addKeyPress(event)
{
	if(event.code === "Enter"){
		event.preventDefault();
		taskSubmit.click();
	}
}


function fieldCondition()
{
	let c=0;
	if(taskName.value=="")
	{
		taskName.style="-webkit-box-shadow: 0 0 10px red;box-shadow: 0 0 10px red;"
		c++;
	}
	if(taskDue.value=="")
	{
		taskDue.style="-webkit-box-shadow: 0 0 10px red;box-shadow: 0 0 10px red;"
		c++;
	}
	if(taskType.value=="")
	{
		taskType.style="-webkit-box-shadow: 0 0 10px red;box-shadow: 0 0 10px red;"
		c++;
	}
	if(taskDesc.value=="")
	{
		taskDesc.style="-webkit-box-shadow: 0 0 10px red;box-shadow: 0 0 10px red;"
		c++;
	}
	
	return (c>1);
}