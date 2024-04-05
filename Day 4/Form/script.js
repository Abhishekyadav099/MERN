// const firstNameChange = (e)=>{
//     // console.log(e.target.value);
//     const val = e.target.value;
//     if (val>18) {
//     console.log('correct');
//     }
// }

// function submitForm(e){
//     e.preventDefault();
//     const first = document.getElementById('firstname').value;
//  const last = document.getElementById('lastname').value;
//  const age = document.getElementById('ag').value;
//  console.log(first,last,age);

// }

function submitForm(e){
    e.preventDefault();
    const t = e.target;
    const res ={
        hobbies
    };

    for(let i=0; i<t.length; i++){
        const ty = t[i].type;
        const vl = t[i].value;
        const nm = t[i].name;
        console.log(ty,vl,nm);
        res[nm] = vl;
        if(ty=='checkbox'){
            console.log(t[i].checked);
        }

    if(ty!=='submit')
    res(nm) =vl;

    if(type=='checkbox' && t[i].checked){
        res.hobbies.push(vl);
    }
    if(ty!='checkbox'){
        res(nm) = vl;
    }
    }
    console.log(res);
}

