

const categoryDataLoad = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const data = await res.json(res);
    displayCategory(data.data.news_category);
}


const displayCategory = (datum) => {
    const buttonContainer = document.getElementById('button-container');

    datum.forEach(data => {

        console.log(data.category_name);
        const div = document.createElement('div');
        // div.classList = `flex justify-between my-10 text-[#858585]`;

        div.innerHTML = `
        <button>${data.category_name}</button>
        
        `
        buttonContainer.appendChild(div)
         
        
        
    });
    

}








categoryDataLoad()