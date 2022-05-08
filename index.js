//mobile navigation
const navEl=document.querySelector('.btn-mobile-nav')
const headerEl=document.querySelector('.header')
navEl.addEventListener('click',()=>{
    headerEl.classList.toggle('nav-open')
    
})


//sticky navigation
const sectionHero=document.querySelector('.section-hero')
const obs=new IntersectionObserver(function(entries){
    const ent=entries[0]
    console.log(entries)
   
    if(ent.isIntersecting===false){
    document.querySelector('.header').classList.add('sticky')}
 
    if(ent.isIntersecting===true){
        document.querySelector('.header').classList.remove('sticky')}
},{
    
    root:null,
    threshold:0,
    rootMargin:"-80px"
    
})
obs.observe(sectionHero)




