window.addEventListener('load', function () {
    const btn_all = document.getElementsByClassName('all')
    const btn_ent = document.getElementsByClassName('ent')
    const btn_sport = document.getElementsByClassName('sport')
    const btn_business = document.getElementsByClassName('business')
    const btn_build = document.getElementsByClassName('build')
    
    
    btn_sport[0].addEventListener('click', addFilter)
    btn_all[0].addEventListener('click', addFilter)
    btn_ent[0].addEventListener('click', addFilter)
    btn_business[0].addEventListener('click', addFilter)
    btn_build[0].addEventListener('click', addFilter)
    
    // функция фильтрующая проекты в разделе portfolio
    function addFilter(event) {

        let filterName = event.target.attributes['data-filter'].nodeValue
        let allItem = Array.from(document.querySelectorAll('.content>div'))

        allItem.forEach((elem)=>{
            elem.classList.remove('hidden')
        })
        if (filterName == 'all'){
            return
        }
        let itemsForHidden = allItem.filter(e => e.id !== filterName)
        itemsForHidden.forEach((elem)=>{
            elem.classList.add('hidden')
        })
    }

    // функция для боллее плавного скролла
    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    for (let smoothLink of smoothLinks) {
        smoothLink.addEventListener('click', function (e) {
            e.preventDefault();
            const id = smoothLink.getAttribute('href');

            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    };
    })