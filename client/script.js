
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
taskDue.value=""
taskType.value=""
taskDesc.value=""

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
	tstatus.style=" margin-top:1.3em;margin-left:3em;font-size: 16px;width:19%;text-align:center;"
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
	due.style="margin-left:4em;font-size: 15px;width:20%;text-align:center;"
	due.value=taskDue.value;

	var priority=document.createElement('select')
	priority.style=" margin-left:4em;font-size: 15px;width:19%;text-align:center;"
	
	
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

function checkKeyPress(event)
{
	if(event.code === "Enter"){
		event.preventDefault();
		button.click();
	}
}

/*
var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);

*/