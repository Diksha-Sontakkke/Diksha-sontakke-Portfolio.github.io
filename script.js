
// Menu button all info:-

     function toggleMenu()
 {
    const menuBtn=document.querySelector('.menu-btn');
    const dropdown=document.getElementById('dropdown');
    if (dropdown.style.display==="block")
    {
        dropdown.style.display="none";
        menuBtn.classList.remove('open');
    }
    else
    {
        dropdown.style.display="block";
        menuBtn.classList.remove('open');
    }
 }
// --------------------------------------------------------------------



 document.querySelector('.resume').addEventListener('click', function() {
    window.location.href = 'resume.html';
});

document.querySelector('.projects').addEventListener('click', function() {
    window.location.href = 'projects.html';
});

document.querySelector('.contact').addEventListener('click', function() {
    window.location.href = 'contact.html';
});




// ==================================================================================



// function toggleMenu()
//  {
//     const menuBtn=document.querySelector('.menu-btn');
//     const dropdown=document.getElementById('dropdown');
//     if (dropdown.style.display==="block")
//     {
//         dropdown.style.display="none";
//         menuBtn.classList.remove('open');
//     }
//     else
//     {
//         dropdown.style.display="block";
//         menuBtn.classList.remove('open');
//     }
//  }