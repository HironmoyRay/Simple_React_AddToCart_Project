///////////////////////////////////////////////////////

// // Creating element by dom
// const p = document.createElement('p');
// p.innerText = "Hello From DOM";

// document.getElementById('root').appendChild(p);

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

// // // Creating element by REACT
// // const myElement = React.createElement("div",null,"Hello from React");
// // ReactDOM.createRoot(document.getElementById("root")).render(myElement);

// const myElement = React.createElement("div",null,React.createElement("p",null,"Hello from React Paragraph"));
// ReactDOM.createRoot(document.getElementById("root")).render(myElement);

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

// Creating Element with JSX (Transpiler -> Babel)
const productCart = (
    <div class="shadow-md rounded-lg bg-slate-800 border-slate-700">
    <a href="#">
        <img
            class="rounded-t-lg"
            src="https://dummyimage.com/680X400/087ea4/ffffff.png&text=Product"
            alt="product image"
        />
    </a>
    <div class="px-5 py-5">
        <div class="flex items-center justify-between mt-5">
            <a href="#">
                <h3 class="font-semibold text-xl tracking-tight">
                    Product Prize
                </h3>
            </a>
            <span class="text-xl font-medium text-teal-500"
                >Total: ৳ 5000</span
            >
        </div>
        <div class="flex items-center justify-between mt-5">
            <span class="text-2xl font-bold text-slate-300"
                >৳ 5000</span
            >
            <a
                href="#"
                class="text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[#087ea4] hover:bg-[#087ea4]/[.8] focus:ring-[#087ea4]/[.5]"
                >Add to cart</a
            >
        </div>
    </div>
</div>
);

ReactDOM.createRoot(document.getElementById("root")).render(productCart);