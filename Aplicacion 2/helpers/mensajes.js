require('colors');

const mostrarMenu=()=>{
    console.log("MENU");




    const readline= require('readline').createInterface({
        input:process.stdin,
        output: process.stdout
    });
    readline.question("¿Que desea?",(opt)=>{
        console.log(opt.green);
        readline.close();

    })


}

module.exports={
mostrarMenu
}