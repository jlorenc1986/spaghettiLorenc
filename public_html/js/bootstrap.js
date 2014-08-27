// FOR U-START ASSIGNMENT


var arrayOfTablesMAC=new Array();
var arrayOfTablesMACDB=new Array();



var objJSON;

//initialize application
function init(){
    
    loadJSON();
   
   
    
  
    
    
}


function loadJSON(){
    
    var XMLHttp=getXMLHttp();
    
    
    XMLHttp.open("GET","hits.json");
    
    
    
function ajaxHandler(){
    
    
    
    
    if(XMLHttp.readyState==4){
        
       
        var json=XMLHttp.responseText;
        
          
        objJSON=JSON.parse(json);
        
     
        
         loadArraysOfTables();
        
    }
    
  
    
}
    
    XMLHttp.onreadystatechange=ajaxHandler;
    
    XMLHttp.send(null);
    
    
    
}



function loadArraysOfTables(){
    
    
    //now let' create a list of neted tree
   

var hits=objJSON.hits;

for(a in hits) {

if(hits[a]._type=="mapac"){

arrayOfTablesMAC.push(hits[a]);
//tablesMP[hits[a]._id]=hits[a]._source;
// now lets add this element to the tree

    
}else{
    
 arrayOfTablesMACDB.push(hits[a]);   
    
}

}

  
  dynamicNodeCreation_TABLES();
  
 dynamicNodeCreation_TABLES_MACDB();
 dynamicAttachEvents();
}

function dynamicNodeCreation_TABLES(){
    
    /*
     * 
     * <ol>
				<li class="tabella"><a href="document.html.pdf">Tabella1</a></li>
                                <li > 
                                    <label for="tabella" >Tabella</label> <input type="checkbox" id="tabella"  /> 
					<ol>
						<li class="colonna"><a href="">Colonna1</a></li>
                                                <li class="colonna"><a href="">Colonna1</a></li>
                                                <li class="colonna"><a href="">Colonna1</a></li>
                                                <li class="colonna"><a href="">Colonna1</a></li>
                                                <li class="colonna"><a href="">Colonna1</a></li>
						
					</ol>
				</li>
			</ol>
     * 
     */
    var rifDB1=document.getElementById("macID");
    
    for(a in arrayOfTablesMAC){
        
      
    var newTable=document.createElement("li");
    
    newTable.setAttribute("class","tabella") ;
    
    //create OL
    var tableName=document.createElement("ol");
    
    //create Lable
    var tableLabel=document.createElement("label");
    
    
    var textNode=document.createTextNode(arrayOfTablesMAC[a]._id);   
    tableLabel.setAttribute("for","tabella");
    tableLabel.setAttribute("class","tabella") ;
    tableLabel.appendChild(textNode);
    
    var input=document.createElement("input");
    input.setAttribute("type","checkbox");
    input.setAttribute("id","tabella"+arrayOfTablesMAC[a]._id);
    //input.setAttribute("class","tabella");
    newTable.appendChild(tableLabel);
    newTable.appendChild(input);
  
    
    var arrOfFields=arrayOfTablesMAC[a]._source.columns;
    
    dynamicNodeCreation_FIELDS(newTable,arrOfFields);
    
    tableName.appendChild(newTable);
    
    rifDB1.appendChild(tableName);
   
    for(b in arrOfFields){
        
       var i = document.createElement("li");
       
       
        
        
    }
    
   
    
    }
    
}


function dynamicNodeCreation_TABLES_MACDB(){
    
   
    var rifDB1=document.getElementById("macDBID");
    
    for(a in arrayOfTablesMAC){
        
      
    var newTable=document.createElement("li");
    
     newTable.setAttribute("class","tabella") ;
    
    //create OL
    var tableName=document.createElement("ol");
    
    //create Lable
    var tableLabel=document.createElement("label");
    
    try{
    var t;
    if(arrayOfTablesMACDB[a]._id!=undefined){
        
        
        t=arrayOfTablesMACDB[a]._id;
    }else{
        t="";
        
    }
}catch (ex){ break;}
    var textNode=document.createTextNode(t);   
    tableLabel.setAttribute("for","tabella");
  
    tableLabel.appendChild(textNode);
    var input=document.createElement("input");
    input.setAttribute("type","checkbox");
    input.setAttribute("id","tabella"+arrayOfTablesMAC[a]._id);
  //  input.setAttribute("class","tabella");
    newTable.appendChild(tableLabel);
    newTable.appendChild(input);
  
  
    var arrOfFields=arrayOfTablesMAC[a]._source.columns;
    
    dynamicNodeCreation_FIELDS(newTable,arrOfFields);
    
    tableName.appendChild(newTable);
    
    rifDB1.appendChild(tableName);
   
    for(b in arrOfFields){
        
       var i = document.createElement("li");
       
       
        
        
    }
    
   
    
    }
    
}


function selectParents(){
    
   //first thing I've to distiguish by Table of field element
   
      var tableText = this.parentNode.innerText;
      var database=this.parentNode.parentNode.innerText;
    
     //alert(text);
  if(this.className=="tabella"){
      // now i've to select all fields for this table
  //    var i,len,child=this.firstChild;
  

  
  try{
      
      //this.lastChild.style.backgroundColor="blue";
      var  nodes=this.nextSibling.nextSibling.children;
      
     
      for(a in nodes){
          
          if(nodes[a].style.backgroundColor!="blue"){ 
          nodes[a].style.backgroundColor="blue";
          }else{
               nodes[a].style.backgroundColor="blue";
              
          }
          
         try{ 
          //text+=" , "+nodes[a].childNodes[0].outerText;
         }catch(ex){}
      }
  }catch(ex){}
    
   
  }else{
      
      
      var node = this.childNodes[0];
      
      
       if(node.style.backgroundColor=="blue"){ 
          node.style.backgroundColor="#F8F1F1";
            node.parentNode.parentNode.parentNode.children[0].style.backgroundColor="grey";
          }else{
               node.style.backgroundColor="blue";
             
               //set parent grey
               
              
          }
      
      
      
  }

 
    

    
  document.getElementById("content").innerHTML=tableText;
}
function dynamicNodeCreation_FIELDS(table,arrayofFields){
    
    
    /*
     * this code must do this :)
     * <ol>
						<li class="colonna"><a href="">Colonna1</a></li>
                                                <li class="colonna"><a href="">Colonna1</a></li>
                                                <li class="colonna"><a href="">Colonna1</a></li>
                                                <li class="colonna"><a href="">Colonna1</a></li>
                                                <li class="colonna"><a href="">Colonna1</a></li>
						
					</ol>
     * 
     * 
     * 
     * 
     * 
     * 
     */
    var ol=document.createElement("ol");
    var lipro=document.createElement("li");
    ol.appendChild(lipro);
    ol.appendChild(lipro);
  
    
   // var ol=document.createElement("ol");
   
    for(a in arrayofFields){
        
        var li=document.createElement("li");
        var tipo=arrayofFields[a].type;
        //alert(tipo);
        li.setAttribute("class","colonna");
       
        var link=document.createElement("a");
           link.setAttribute("title",arrayofFields[a].name);
           link.setAttribute("id",tipo)
           var input=document.createElement("input");
           input.setAttribute("type","checkbox");
           input.setAttribute("id","colonna"+arrayofFields[a].type);
           input.setAttribute("class","colonna");
        
        var textNode=document.createTextNode(arrayofFields[a].name);
        link.appendChild(textNode);
        li.appendChild(link);
        li.appendChild(input);
        
        ol.appendChild(li);
        
        table.appendChild(ol);
    }
   
    
    
    
}

function dynamicAttachEvents(){
    
   var tables =  document.querySelectorAll(".tabella");
   var fields = document.querySelectorAll(".colonna");
   
   
 //  alert("tabelle" + tables.length+" , fields"+ fields.length);
   
   //travering each elements and attaching events
   
    for (a in fields){
       
       
       fields[a].onclick=selectParents;
   }
   
   for (a in tables){
       
       
       tables[a].onclick=selectParents;
   }
}