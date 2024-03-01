<div class="col-span-1 p-5 ">
                    <img class="w-full object-cover" src="Images/unsplash_EhTcC9sYXsw.png" alt="">
                </div>
                <div class="col-span-3 p-10 space-y-8">
                    <h1 class="font-bold text-2xl text-[#121221]">The best fashion influencers to follow for
                        sartorialinspiration</h1>

                    <p class="text-[#949494] ">There’s no better time than now to familiarise yourself with the best
                        online vintage clothing stores. If you want to
                        overhaul your wardrobe for the long run, mixing vintage with high street clothing is the key to
                        being trendy as well as
                        sustainable.
                    </p>

                    <!-- conainer -->
                    <div class="flex justify-between items-center">
                        <!-- profile -->
                        <div class="flex gap-2 items-center">
                            <div>
                                <img src="Images/Avatar.png" alt="">
                            </div>
                            <div>
                                <p>Jane Cooper</p>
                                <p>Jan 10, 2022</p>
                            </div>
                        </div>
                        <!-- view -->
                        <div class="flex gap-2 items-center">
                            <i class="fa-regular fa-eye"></i>
                            <p>1.5M</p>
                        </div>
                        <!-- rating -->
                        <div>
                            <i class="fa-solid text-amber-300 fa-star"></i>
                            <i class="fa-solid text-amber-300 fa-star"></i>
                            <i class="fa-solid text-amber-300 fa-star"></i>
                            <i class="fa-solid text-amber-300 fa-star"></i>
                            <i class="fa-solid text-amber-300 fa-star-half-stroke"></i>

                        </div>
                        <!-- button -->
                        <div>
                            <button class="btn-circle bg-slate-400 btn-outline"><i
                                    class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>













                const div1 = document.createElement('div');
        div1.classList = `col-span-1 p-5`
        div1.innerHTML = `
            <img class="w-full object-cover" src="Images/unsplash_EhTcC9sYXsw.png" alt="">
        `;

        const div2 = document.createElement('div');
        div2.classList = `col-span-3 p-10 space-y-8`;
        div2.innerHTML = `

                <h1 class="font-bold text-2xl text-[#121221]">The best fashion influencers to follow for
                        sartorialinspiration</h1>

                    <p class="text-[#949494] ">There’s no better time than now to familiarise yourself with the best
                        online vintage clothing stores. If you want to
                        overhaul your wardrobe for the long run, mixing vintage with high street clothing is the key to
                        being trendy as well as
                        sustainable.
                    </p>

                    <!-- conainer -->
                    <div class="flex justify-between items-center">
                        <!-- profile -->
                        <div class="flex gap-2 items-center">
                            <div>
                                <img src="Images/Avatar.png" alt="">
                            </div>
                            <div>
                                <p>Jane Cooper</p>
                                <p>Jan 10, 2022</p>
                            </div>
                        </div>
                        <!-- view -->
                        <div class="flex gap-2 items-center">
                            <i class="fa-regular fa-eye"></i>
                            <p>1.5M</p>
                        </div>
                        <!-- rating -->
                        <div>
                            <i class="fa-solid text-amber-300 fa-star"></i>
                            <i class="fa-solid text-amber-300 fa-star"></i>
                            <i class="fa-solid text-amber-300 fa-star"></i>
                            <i class="fa-solid text-amber-300 fa-star"></i>
                            <i class="fa-solid text-amber-300 fa-star-half-stroke"></i>

                        </div>
                        <!-- button -->
                        <div>
                            <button class="btn-circle bg-slate-400 btn-outline"><i
                                    class="fa-solid fa-arrow-right"></i></button>
                        </div>
        
        `

        divConainer.appendChild(div1);
        divConainer.appendChild(div2)