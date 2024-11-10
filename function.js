const node_for_click_all = document.getElementById("for_click_all")

function find_edit_all(){
    //const item  = document.getElementsByTagName('p')[0]
    //console.log(item.innerText)
   //item.innerText = 'новое Имя Ivan'

    document.getElementsByTagName('div')[7].innerText='KOlKOTINA'
    document.getElementsByTagName('div')[8].innerText='VALERIA'
    document.getElementsByTagName('div')[9].innerHTML='VIACHESLAVOVNA'
    document.getElementsByTagName('div')[12].innerHTML='GOR. MOSKVA'

}
node_for_click_all.addEventListener("click",find_edit_all)
