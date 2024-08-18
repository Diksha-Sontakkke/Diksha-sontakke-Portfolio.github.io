
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



 document.querySelector('.skills-btn').addEventListener('click', function() {
    window.location.href = '#skills-section';
});

document.querySelector('.projects-btn').addEventListener('click', function() {
    window.location.href = '#projects';
});

document.querySelector('.contact-btn').addEventListener('click', function() {
    window.location.href = '#Contacts';
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



// ==============================================================================


