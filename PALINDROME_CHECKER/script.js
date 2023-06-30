const btn_doc = document.querySelector( ".btn")


function Palidrome_check()
{
    let word = document.querySelector(".input-text").value;
    word = word.toLowerCase();
    let rev_word = word.split("").reverse().join("");
    let result_doc = document.querySelector(".result");
    if( word == rev_word )
    {
        result_doc.innerHTML = word + " is Palindrome";
    }
    else
    {
        result_doc.innerHTML = word + " is Not Palindrome";
    }
    
}

btn_doc.addEventListener("click",Palidrome_check)