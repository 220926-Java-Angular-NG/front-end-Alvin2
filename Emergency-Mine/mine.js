/**
 * Minesweeper
 * 
 */
//Todo list
//-Make a 'cell' object
//A cell has:
/**
 * An image of the blank cell
 * Boolean isFlipped
 * boolean isMine - if it is a mine
 * int how many mines adjacent
 */
//These objects are to replace the random number in the current code


//Mines are generated, but the player cannot lose on first click
//If the player would click on a mine on first click, then it is 
//moved to the first legal cell starting on the top left.
//Cannot hit a mine on first click

//10 mines for easy
//40 mines for intermediate
//99 mines for expert







//Creates the array that works in the backend
var rowCol = 8;
var a = [];
var b =[];
function makeArray(rowCol)
{console.log("TEST");
    // var Cell = 
    // {
    //     isFlipped: false,
    //     isMine: false,
    //     minesAdjacent: 0,
    //     id: 0
    // }

    var rows = 0;
    var cols = 0;
    while (rows < rowCol)
    {//(a.length < rowCol)
        //(rows < rowCol)
        while (cols < rowCol)
        {//(b.length < rowCol)
            //(cols < rowCol)
            //randomNumber = Math.floor(Math.random()*10)//Random number between 0-9
            //b.push(randomNumber);//adds a random number to array b
            console.log("Test");
            var cell = {};
            cell.isFlipped = false;
            cell.isMine = false;
            cell.minesAdjacent = 0;
            cell.id = "r" + rows + "c" + cols;
            console.log(cell.id);
            b.push({cell});
            cols++;
        }
        cols = 0;
        a.push(b)//Makes array a an array of arrays
        b = [];//Empties array b so that it can get more random numbers
        rows++;
    }    
    console.log(a);
console.log(a[0][0]);
}

//Create the cells in the html document
boardMade = false;
function makeBoard()
{
    if(!boardMade)
    {
        for(i =0;i < rowCol; i++)
        {
            for(j= 0; j< rowCol; j++)
            {
                var x = document.createElement('img');
                x.src = './Images/Cell.png';
                x.id = "r" + i + "c" + j;
                document.getElementById('location').appendChild(x);
        
                var y = document.createElement('img');
                y.src = './Images/Empty.png';
                y.id = "emptyCell";
                document.getElementById('location').appendChild(y);
            }
            var br = document.createElement("br");
            var foo = document.getElementById("location");
            foo.appendChild(br);  
        }
        boardMade = true;
    }

}


//Calls the makeBoard function when Begin is clicked
var board = document.getElementById("Begin");
board.addEventListener('click', (event)=>
{
    event.preventDefault();
    makeBoard();
    makeArray(rowCol);
}
)

//The player clicks a cell as a guess
function Guess(event)
{
    // alert(event.target.tagName);
    //console.log(event.target.tagName);
    
    //alert(event.target.id);
    //console.log(event.target.id);
    if(event.target.id != "Begin" && event.target.id != "emptyCell" && event.target.id != "Clear")
    {        
        var audio = document.getElementById("audio");
        audio.play();


        var Ran = Math.floor(Math.random()*10);
        switch (Ran)
        {
            case 0:
                event.target.src = './Images/0.png';//This can change the image
                break;
            case 1:
                event.target.src = './Images/1.png';//This can change the image
                break;
            case 2:
                event.target.src = './Images/2.png';//This can change the image
                break;
            case 3:
                event.target.src = './Images/3.png';//This can change the image
                break;
            case 4:
                event.target.src = './Images/4.png';//This can change the image
                break;
            case 5:
                event.target.src = './Images/5.png';//This can change the image
                break;
            case 6:
                event.target.src = './Images/6.png';//This can change the image
                break;
            case 7:
                event.target.src = './Images/7.png';//This can change the image
                break;
            case 8:
                event.target.src = './Images/8.png';//This can change the image
            break;
            case 9:   
            event.target.src = './Images/Bomb.png';//This can change the image
                break;                                     
        }

        event.target.id = "Clear";
        //targetId = event.target.id;
        //console.log(targetId);
    }

}

//Allows the user to input how big they want the board to be
var numButt = document.getElementById('numButt');
numButt.addEventListener('click', (event)=>
{        

    event.preventDefault();
    var number = document.getElementById('num').value;
    rowCol = number;
    console.log(rowCol);

    sizeOut = document.getElementById("SizeOut");

    //sizeOut.classList.add("fadeBack");
    //sizeOut.classList.remove("fadeBack");

    sizeOut.innerHTML = "Size of board set to: " + number;
    disappear();
    function disappear()
{


    setTimeout(()=>
    {
        sizeOut.classList.add("fadeOut");
    //
    },500)

    setTimeout(()=>
    {
        sizeOut.innerHTML= "";    
        sizeOut.classList.remove("fadeOut");
    },1500)


}
})
