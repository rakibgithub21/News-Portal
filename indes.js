

const categoryDataLoad = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const data = await res.json();
    displayCategory(data.data.news_category);
}


const displayCategory = (datum) => {
    const buttonContainer = document.getElementById('button-container');

    datum.forEach(data => {

        // console.log(data.category_name);
        const div = document.createElement('div');
        // div.classList = `flex justify-between my-10 text-[#858585]`;

        div.innerHTML = `
        <button>${data.category_name}</button>
        
        `
        buttonContainer.appendChild(div)



    });


}



const loadCategoryDetails = async () => {
    const url = `https://openapi.programming-hero.com/api/news/category/01`;
    const res = await fetch(url);
    const data = await res.json();
    displayCategoryDetails(data.data);
}



const displayCategoryDetails = (data) => {
    // console.log(data);
    const sectionContainer = document.getElementById('section-container');
    data.forEach((info) => {
        console.log(info);
        const div = document.createElement('div');
        div.classList = `grid grid-cols-4 bg-white rounded-xl border`;
        div.innerHTML = `
        
        <div class="col-span-1 p-5 ">
                    <img class="w-full object-cover" src=${info.image_url}>
                </div>
                <div class="col-span-3 p-10 space-y-8">
                    <h1 class="font-bold text-2xl text-[#121221]">${info.title}</h1>

                    <p class="text-[#949494] ">
                    ${info.details.slice(0, 200) + '.....'}
                    </p>

                    <!-- conainer -->
                    <div class="flex justify-between items-center">
                        <!-- profile -->
                        <div class="flex gap-2 items-center">
                            <div>
                                <img class="w-[38px] rounded-full" src=${info.author.img}>
                            </div>
                            <div>
                                <p>${info.author.name}</p>
                                <p>${info.author.published_date}</p>
                            </div>
                        </div>
                        <!-- view -->
                        <div class="flex gap-2 items-center">
                            <i class="fa-regular fa-eye"></i>
                            <p>${info.total_view}</p>
                        </div>
                        <!-- rating -->
                        <div>
                            <p class="font-medium">Ratings: <span class ="font-bold">${info.rating.number}</span><sup class="ml-5 bg-pink-300 p-1 rounded-xl text-black font-semibold">${info.rating.badge}</sup></p>
                        </div>
                        <!-- button -->
                        <div>
                            <button class="btn-circle bg-slate-400 btn-outline"><i
                                    class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
        
        `;
        sectionContainer.appendChild(div)
    });
}



categoryDataLoad()
loadCategoryDetails()