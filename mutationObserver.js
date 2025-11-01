const targetNode = document.getElementById("myDiv");
const config = { attributes : true, childList: true, subTree: true}

const callback = function(mutationList){
    for (let mutation of mutationList){
        if(mutation.type === 'childList'){
            console.log(" A child node has been added or removed");
        }
        else if (mutation.type === "attribues"){
            console.log('The '+ mutationList.attributeName + '')
        }
    }
}

const observer = new MutationObserver(callback);
observer.observe(targetNode, config);


observer.disconnect()