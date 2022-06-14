let textarea, inputEl, resultEl, result, i=0, current = 0; 

document.getElementById('upload')
			.addEventListener('change', function() {                
			var fl=new FileReader();
			fl.onload=function(){
				document.getElementById('text')
						.textContent=fl.result;
			}			
            fl.readAsText(this.files[0]);
        })       

const removewords = () => {
    if(inputEl.value!==''){
        if(textarea.value.includes(inputEl.value)){
            while(textarea.value.includes(inputEl.value)){
                textarea.value = textarea.value.replace(inputEl.value,'');
        }if(!textarea.value.includes(inputEl.value)){
            alert("successfully done!");
        }
    }else{
        alert("The text doesn't contain this word!");
        }
    resultEl.innerHTML = textarea.value;}else{
        alert("Please fill the fields!");
    }
};


const removeselection = () => {
    if (window.getSelection) {
        selection = window.getSelection().toString();}
    if(selection.length>0){
        while(textarea.value.includes(selection)){
            textarea.value = textarea.value.replace(selection,'');}
    resultEl.innerHTML = textarea.value;}
};


const removenumbers = () => {
    regex=new RegExp('[1-9]?[0-9]','g');
    textarea.value = textarea.value.replace(regex,'');
    resultEl.innerHTML = textarea.value;
};

const removefirstnumbers = () => {
    regex = new RegExp('^[1-9]?[0-9]','g');
    regex2 = new RegExp('[\n][1-9]?[0-9]','g');
    regex3 = new RegExp('[\r][1-9]?[0-9]','g');
    if(textarea.value.match(regex)){
        textarea.value = textarea.value.replace(regex,'');
    }else{
        if(textarea.value.match(regex2)){
        textarea.value = textarea.value.replace(regex2,'\n');}else{
            if(textarea.value.match(regex3)){
                textarea.value = textarea.value.replace(regex3,'\r');}            
        }
    };
    resultEl.innerHTML = textarea.value;
};

const replacewords = () => {
    if(inputEl.value!=='' && replace.value!==''){
        if(textarea.value.includes(inputEl.value)){
            while(textarea.value.includes(inputEl.value)){
                textarea.value = textarea.value.replace(inputEl.value,replace.value);
        }if(!textarea.value.includes(inputEl.value)){
            alert("successfully done!");
        }
    }else{
        alert("The text doesn't contain this word!");
        }
    resultEl.innerHTML = textarea.value;}else{
        alert("Please fill the fields!");
    }
};

function downloadFile() {
    const content = document.getElementById('text').value;
    const filename = 'Modified'+i+'.txt';
          i++;
 
    const element = document.createElement('a');
    
   
    const blob = new Blob([content], { type: 'plain/text' });
  
     
    const fileUrl = URL.createObjectURL(blob);
    
    
    element.setAttribute('href', fileUrl); //file location
    element.setAttribute('download', filename); // file name
    element.style.display = 'none';    
     
    document.body.appendChild(element);
    element.click();
    
    document.body.removeChild(element);
  };
  


window.onload = () => {    
    
    textarea = document.querySelector('#text');
    inputEl = document.querySelector('#search');
    replace = document.querySelector('#replace');
    resultEl = document.querySelector('#printResult');
};
