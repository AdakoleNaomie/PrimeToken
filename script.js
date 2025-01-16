const cone = document.querySelectorAll(".cone")

const observer = new IntersectionObserver(entries => {
    
    entries.forEach(entry =>{
        entry.target.classList.toggle("show", entry.isIntersecting)

        // the berlow commented code is for if you don't want the effect to be repetitive
        // if (entry.isIntersecting) observer.unobserve(entry.target)
        console.log(entries)
    })
}, {
    // threshold: 1,
    rootMargin:"-100px",
})
cone.forEach(cone =>{
    observer.observe(cone)
})

const box24 = document.querySelectorAll(".box24")

const observer1 = new IntersectionObserver(entries => {
    
    entries.forEach(entry =>{
        entry.target.classList.toggle("show", entry.isIntersecting)

        // the berlow commented code is for if you don't want the effect to be repetitive
        // if (entry.isIntersecting) observer.unobserve(entry.target)
        console.log(entries)
    })
}, {
    // threshold: 1,
    rootMargin:"-100px",
})
box24.forEach(box24 =>{
    observer.observe(box24)
})