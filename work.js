const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})

const hiddenElements = document.querySelectorAll('.left')
hiddenElements.forEach((el) => observer.observe(el));



const rightSde = new IntersectionObserver((income)=> {
    income.forEach((ri)=> {
        if (ri.isIntersecting){
            ri.target.classList.add('revealing');
        }else{
            ri.target.classList.remove('revealing')
        }
    })
})


const newElement = document.querySelectorAll('.right')
newElement.forEach((el) => rightSde.observe((el)))