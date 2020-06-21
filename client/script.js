var sideBar=document.getElementById('sidebar')   //sidebar
var navBut=document.getElementById('navbut') 	//navbar button
var search=document.getElementById('search') 		// search bar

// filer bar declarations
var filterLink=document.querySelectorAll('.filter-link') 
var filterBar=document.getElementById('filter-bar') 

var addTask=document.getElementById('add')

// task id values
var TASKID=0;
data={
	taskid:"",
	taskname:"",
}
document.cookie="name="+TASKID;
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

var taskSubmit=document.getElementById('task-submit')
var taskArea=document.getElementById('task-area')

taskName.addEventListener('keyup',addKeyPress,false);
taskDue.addEventListener('keyup',addKeyPress,false);
taskType.addEventListener('keyup',addKeyPress,false);	
taskPrio.addEventListener('keyup',addKeyPress,false);
taskDesc.addEventListener('keyup',addKeyPress,false);

taskName.value=""
taskType.value=""

///DECLARING LOCALSTORAGE FOR TASKS
if(window.localStorage.getItem('todoarray')==undefined){
	var todoarray=[]
	window.localStorage.setItem("todoarray",JSON.stringify(todoarray))
}

var todoarray=JSON.parse(window.localStorage.getItem('todoarray'));

addTask.addEventListener('click',()=>{   // addtask button listener
	popUp.style="display:block;"
})

		////POPUP EXIT BUTTON
popExit.addEventListener('click',()=>{
	popUp.style="display:none;"
})
	////SIDEBAR NAVIGATION BUTTON
navBut.addEventListener('click',()=>{

	if(sideBar.style.display== "block")
	{
		sideBar.style="display:none;";
	}
	else{
		sideBar.style="display:block;";
	}	
})

						///SUBMIT TASK BUTTON///
taskSubmit.addEventListener('click',()=>{
	new bar({taskid:taskValue((TASKID).toString()),
		taskname:taskName.value.toString()});

	todoarray.push({
		taskid:taskValue(TASKID.toString()),
		taskname:taskName.value.toString()
});
	window.localStorage.setItem('todoarray',JSON.stringify(todoarray));
	TASKID++;
	document.cookie="name="+TASKID;
	
	
})

// addTask.addEventListener('keyup',checkKeyPress,false);	
class bar{
	constructor(data){
		this.createBar(data);
	}

	createBar(data){

			var box=document.createElement('div');
			box.style="float:left;background-color:yellow;width:100%;height:4em;border:2px solid black;margin-top:1em;display:flex;"
			box.classList.add('box');

			var check=document.createElement('input');
			check.setAttribute('type','checkbox');
			check.style="float: left;  margin-top:1.7em;margin-left:1.5em;height:1.3rem;width:1.3rem;"
			check.classList.add('check')
			check.addEventListener('click',()=>{
				if(check.checked)
				{
					this.remove(box,data);
				}
			});

			var tid=document.createElement('p');
			tid.style="float:left;margin-top:1rem;margin-left:1em;font-size:25px;"
			tid.textContent=data.taskid
			tid.value=data.taskid;

			var tname=document.createElement('p');
			tname.style="float:left;margin-top:1rem;margin-left:1em;font-size:25px;width:19%;text-align:center;";
			tname.textContent=data.taskname;
			

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

		}

		remove(box,id,data)
		{
			box.parentNode.removeChild(box);
			let index=()=>{
				for(let i=0;i<todoarray.length;i++)
				{
					if(data[i].taskid==todoarray.taskid){
						return i;
					}
				}
			}
			todoarray.splice(index,1);
			window.localStorage.setItem('todoarray',JSON.stringify(todoarray));
		}

}

function taskValue(number){  //function to control the value of taskId
	if(number<10)
	{
		number="00"+number;
	}
	else if(number<100)
	{
		number="0"+number;
	}
	else{
		return number;
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

for(let v=0;v<todoarray.length;v++)
{
	new bar(todoarray[v]);
}
