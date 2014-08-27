


// this function return xmlhttp object for Ajax request


function getXMLHttp(){
    
    
    var XMLHttp;
    
    
    if(window.XMLHttpRequest){
        
        
        try{
            
            XMLHttp=new XMLHttpRequest();
            
            
        }catch(ex){}
        
    
    }else{
        
        
        try {
            XMLHttp=new ActiveXObject("Msxml2.XMLHTTP");
        }catch (ex){}
        
        
        try{
            
            XMLHttp=new ActiveXObject("Microsoft.XMLHTTP");
            
            
        }catch (ex){}
        
    }
    
    
    return  XMLHttp;
}